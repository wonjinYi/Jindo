const express = require("express");
const HTTPS = require('https');

const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const url = require('url');
const fs = require('fs');
const axios = require('axios');
const cors = require('cors');

const { Op } = require('sequelize');
const { sequelize } = require('./models');
const { PublicBoard } = require('./models');
const { PrivateBoard } = require('./models');

const dotenv = require('dotenv');
dotenv.config();

const STATE = String(Math.random());
const sslport = 8000

const SESSION_LIST = [];
const app = express();

try {
    const option = {
        key: fs.readFileSync('keys/jindoback.wonj.in.key.pem'),
        cert: fs.readFileSync('keys/jindoback.wonj.in.crt.pem')
    };

    HTTPS.createServer(option, app).listen(sslport, () => {
        console.log(`[HTTPS] Jindo Server is started on port ${sslport}`);
    });

} catch (error) {
    console.log(error);
}

sequelize.sync({ force : false })
    .then ( () => {
        console.log('Connected to Database successfully');
    })
    .catch ( (err) => {
        console.error(err);
    })

app.set('port', process.env.PORT || 8000);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret:process.env.COOKIE_SECRET,
    resave:false,
    saveUninitialize:true,
    cookie : {
        httpOnly : true,
        sameSite:'none',
        maxAge : 5300000,
        secure : true,
    },
}));

const corsOptions = {
    origin : true,
    credentials : true
};

app.use(cors(corsOptions));

//////////////////////////////////////////////////////////////////////////////////////////////////////

app.get("/", (req, res, next) => {
    console.log(req.session.id);
    console.log(req.session.data)
})
app.get("/login/daldalso", (req, res, next) => {
    console.log("LOGIN REQUEST! (Daldalso)");
    res.redirect(`https://daldal.so/oauth/authorize?response_type=code&client_id=${process.env.DALDALSO_CLIENT_ID}&state=${STATE}&redirect_uri=${encodeURIComponent(process.env.DALDALSO_REDIRECT_URL)}`);
})
app.get("/login/daldalso/redirect", async (req, res, next) => {
    if(req.query['state'] !== STATE){
        res.send("뭐야 STATE값이 이상하잖아?")
        return;
    }
    try{
        let respond;
        let token;
        
        respond = await axios.post("https://daldal.so/oauth/token", {
            client_id: process.env.DALDALSO_CLIENT_ID,
            client_secret: process.env.DALDALSO_KEY,
            grant_type: "authorization_code",
            code: req.query['code']
        });
        token = respond.data['access_token'];
        // 여기까지 왔다면 인증과정-4 성공

        respond = await axios.get("https://daldal.so/oauth/api/me", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        console.log(respond.data);

        req.session.islogin = true;
        SESSION_LIST.push({
            id : req.session.id, 
            namd : respond.data.name,
            email : respond.data.account,
        });

        console.log(SESSION_LIST);
            // 여기까지 왔다면 인증과정-6 성공
        } catch(e) {
            console.error(e);
            res.sendStatus(500);
        }
    
    res.redirect("http://localhost:3000/")
})

app.post('/sessiontest', function (req, res, next) {
    console.log(req.session.id);
    console.log(req.session.islogin);
    if(req.session.num == undefined){
        req.session.num = 1;
    } else {
        req.session.num =  req.session.num + 1;
        console.log(req.session.num);
    }
    console.log(req.session.num);

    res.send(req.session.id);
});

app.get('/islogin', function (req, res, next) {
    console.log(req.session.id);
    console.log(req.session.islogin);
    if( req.session.islogin === true ){
        res.send(true);
    }
    else {
        res.send(false);
    }
    
})
app.get('/logout', function (req, res, next) {
    console.log(req.session.id);
    req.session.destroy( function(req, res, next) {
        //console.log(req.session.id);
        console.log(' ㄴ logout !');
    });

    res.send('logout done')
});

//////////////////////////////////////////////////////////////////////////////////////////////////////

app.get("/public/data", async (req, res, next) => {
    const read = await PublicBoard.findAll({
        attributes : ['id', 'name', 'memo', 'updatedAt']
    });

    console.log("--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--")
    console.log("Read DONE");
    console.log("--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--")

    res.json(read);
});

app.post("/public/create", async (req, res, next) => {
    const create = await PublicBoard.create({
        name : req.body.name,
        memo : req.body.memo,
    });

    console.log("--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--")
    console.log(`Create DONE\n  ㄴ name : ${req.body.name}   memo : ${req.body.memo}`);
    console.log("--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--")

    res.json(create);
});

app.post("/public/edit", async (req, res, next) => {
    const edit = await PublicBoard.update({
        name : req.body.name,
        memo : req.body.memo,
    }, {
        where : { id : req.body.id },
    });

    console.log("--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--")
    console.log(`Edit DONE\n  ㄴ id : ${req.body.id}   name : ${req.body.name}   memo : ${req.body.memo}`);
    console.log("--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--")

    res.json(edit);
});

app.post("/public/delete", async (req, res, next) => {
    const del = await PublicBoard.destroy({
        where : { id : req.body.id },
    });

    console.log("--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--")
    console.log(`Delete DONE\n  ㄴ id : ${req.body.id}`);
    console.log("--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--")

    res.json(del);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////

// login check
app.use("/private", (req, res, next) => {
    const target = SESSION_LIST.find( el => (el.id === req.session.id) );
    if ( target === -1 ) {
        res.send('need login');
    } else {
        next();
    }
})

app.get("/private/read", async (req, res) => {
    const read = await PrivateBoard.findAll({
        attributes : ['id', 'name', 'memo', 'updatedAt']
    });

    console.log("--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--")
    console.log("[PRIVATE] Read DONE");
    console.log("--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--")

    res.json(read);
})

app.post("/private/create", async (req, res, next) => {
    // 현재 요청이 들어온 세션이 SESSION_LIST에서 몇 번째인지 찾기 (인덱스)
    const target = SESSION_LIST.find( el => (el.id === req.session.id) );
    if ( target === -1 ) {
        res.send('need login');
    }

    const create = await PrivateBoard.create({
        name : SESSION_LIST[target].name,
        email : SESSION_LIST[target].email,
        memo : req.body.memo,
    });

    console.log("--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--")
    console.log(`[PRIVATE] Create DONE\n  ㄴ name : ${SESSION_LIST[target].name}    email : ${SESSION_LIST[target].email}    memo : ${req.body.memo}`);
    console.log("--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--")

    res.json(create);
});

app.post("/private/edit", async (req, res, next) => {
    const edit = await PrivateBoard.update({
        memo : req.body.memo,
    }, {
        where : { id : req.body.id },
    });

    console.log("--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--")
    console.log(`[PRIVATE] Edit DONE\n  ㄴ name : ${SESSION_LIST[target].name}    email : ${SESSION_LIST[target].email}    memo : ${req.body.memo}`);
    console.log("--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--")

    res.json(edit);
});

app.post("/private/delete", async (req, res, next) => {
    const del = await PrivateBoard.destroy({
        where : { id : req.body.id },
    });

    console.log("--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--")
    console.log(`[PRIVATE] Delete DONE\n  ㄴ id : ${req.body.id}`);
    console.log("--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--")

    res.json(del);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////

app.use("/", (req, res, next) => {
    res.send("여기가 어디지? 주변을 둘러보니 순백의 공허만이 가득했다")
})

// Catch Error
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.send('error');
});