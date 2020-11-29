const express = require("express");
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');

const dotenv = require('dotenv');
dotenv.config();

// sequelize.sync({ force : false })
//     .then ( () => {
//         console.log('Connected to Database successfully');
//     })
//     .catch ( (err) => {
//         console.error(err);
//     })

let doList = { data : [
    {"name":"wonjin", "content":"테스트입니다테스트스트"},
    {"name":"wonjin", "content":"testtttetetsetsetsetset"},
    {"name":"좀 긴 이름임니다", "content":"긴글테스트 긴글긴글 길다길어길어길어 긴글이다 긴글 기이이이일어 길어길어 길면 기차긴글테스트 긴글긴글 길다길어길어길어 긴글이다 긴글 기이이이일어 길어길어 길면 기차"},
    {"name":"wonjin", "content":"오후5시에 해킹"},
  ],
}

const app = express();
app.set('port', process.env.PORT || 8000);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded( {extended : false }));

app.get("/data", (req, res, next) => {
    console.log("하이하이 접속했음");
    res.header("Access-Control-Allow-Origin", "*");
    res.json(doList);
    console.log(doList);
});

// Catch Error
app.use( (err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

app.listen(app.get('port'), () => {
    console.log(`============ standby at port ${app.get('port')} ==============`);
})