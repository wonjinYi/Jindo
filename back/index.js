const express = require("express");
const HTTPS = require('https');

const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const url = require('url');
const fs = require('fs');

const { Op } = require('sequelize');
const { sequelize } = require('./models');
const { PublicBoard } = require('./models')
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



app.use('/', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    next();
});

app.get("/public_data", async (req, res, next) => {
    const read = await PublicBoard.findAll({
        attributes : ['id', 'name', 'memo', 'updatedAt']
    });

    console.log("--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--")
    console.log("Read DONE");
    console.log("--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--")

    res.json(read);
});

app.post("/create", async (req, res, next) => {
    const create = await PublicBoard.create({
        name : req.body.name,
        memo : req.body.memo,
    });

    console.log("--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--")
    console.log(`Create DONE\n  ㄴ name : ${req.body.name}   memo : ${req.body.memo}`);
    console.log("--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--")

    res.json(create);
});

app.post("/edit", async (req, res, next) => {
    const edit = await PublicBoard.update({
        name : req.body.modalName,
        memo : req.body.modalMemo,
    }, {
        where : { id : req.body.modalId },
    });

    console.log("--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--")
    console.log(`Edit DONE\n  ㄴ id : ${req.body.modalId}   name : ${req.body.modalName}   memo : ${req.body.modalMemo}`);
    console.log("--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--")

    res.json(edit);
});

app.post("/delete", async (req, res, next) => {
    const del = await PublicBoard.destroy({
        where : { id : req.body.id },
    });

    console.log("--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--")
    console.log(`Delete DONE\n  ㄴ id : ${req.body.id}`);
    console.log("--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--ㅇ--")

    res.json(del);
});

app.use((req, res, next) => {
    res.status(404).send("여기가 어디지? 주위를 둘러보니 아무것도 없었다\nhttps://wonj.in/")
  });

// Catch Error
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.send('error');
});