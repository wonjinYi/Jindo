const express = require("express");
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const url = require('url');
const fs = require('fs');
const HTTPS = require('https');

const dotenv = require('dotenv');
dotenv.config();

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

// sequelize.sync({ force : false })
//     .then ( () => {
//         console.log('Connected to Database successfully');
//     })
//     .catch ( (err) => {
//         console.error(err);
//     })

let doList = { data : [
    {"id":0, "name":"wonjin", "content":"테스트입니다테스트스트"},
    {"id":1, "name":"wonjin", "content":"testtttetetsetsetsetset"},
    {"id":2, "name":"좀 긴 이름임니다", "content":"긴글테스트 긴글긴글 길다길어길어길어 긴글이다 긴글 기이이이일어 길어길어 길면 기차긴글테스트 긴글긴글 길다길어길어길어 긴글이다 긴글 기이이이일어 길어길어 길면 기차"},
    {"id":3, "name":"wonjin", "content":"오후5시에 해킹"},
  ],
}
let CNT = doList.data.length;

//const app = express();
app.set('port', process.env.PORT || 8000);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded( {extended : false }));

// app.use("/", (req, res, next) => {
//     console.log("root access");
//     res.send("hi");
// })


app.use('/', (req, res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    next();
});

app.get("/data", (req, res, next) => {
  console.log("Read DONE");
  res.json(doList);
});

app.post("/create", (req, res, next) => {
    const {data} = doList
    
    
    data.push({
        "id":CNT,
        "name":req.body.name,
        "content":req.body.content,
    })
    CNT++;
    console.log("Create DONE\n  ㄴ : ", req.body);
    res.json(req.body);
});

app.post("/delete", (req, res, next) => {
  console.log("delete : ", req.body)

  const {data} = doList
  for(let i=0; i<data.length; i++){
    if(data[i].id == req.body.id){
      data.splice(i,1);
      console.log(`Delete DONE!\n  ㄴDB id : ${i} , req id : ${req.body.id}`)
      break;
    }
  }

  res.json(req.body);
});

// Catch Error
app.use( (err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.send('error');
});

// app.listen(app.get('port'), () => {
//     console.log(`============ standby at port ${app.get('port')} ==============`);
// })