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

const { Op } = require('sequelize');
const { sequelize } = require('./models');
const { PublicBoard } = require('./models');
const { PrivateBoard } = require('./models');

const dotenv = require('dotenv');
dotenv.config();

const STATE = String(Math.random());
const sslport = 8000

const app = express();

try {
    const option = {
        //ca : fs.readFileSync('keys/jindoback.wonj.in.ca-bundle.pem'),
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
         httpOnly : false,
    //     //secure : true,
    },
    // name : "session-cookie",
    //store : new FileStore(),
}));


app.use('/', (req, res, next) => {
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, Authorization, Content-Length, X-Requested-With');

    next();
});

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
        console.log(req.session.islogin);
        // 여기까지 왔다면 인증과정-6 성공
      }catch(e){
        console.error(e);
        res.sendStatus(500);
    }
    
    res.redirect("http://localhost:3000/")
    //res.send('dfdfdfdfdf');
})

app.get('/sessiontest', function (req, res, next) {
    console.log(req.session);
    if(req.session.num === undefined){
        req.session.num = 1;
    } else {
        req.session.num =  req.session.num + 1;
    }
    res.send(`Views : ${req.session.num}`);
})

app.get("/public/data", async (req, res, next) => {
    const read = await PublicBoard.findAll({
        attributes : ['id', 'name', 'memo', 'updatedAt']
    });

    console.log("--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--")
    console.log("Read DONE");
    console.log("--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--")
    //console.log(req.session);
    //console.log(req.session.islogin, req.session.test);
    console.log(req.session);
    console.log(req.session.id);
    if(req.session.num === undefined){
        req.session.num = 1;
    } else {
        req.session.num =  req.session.num + 1;
    }

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