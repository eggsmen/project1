const path = require("path");
const connection = require('./db.js');
const express = require('express');
const fs = require('fs');
const data = fs.readFileSync( './database.json');
const conf = JSON. parse(data);
const mysql = require('mysql2');
const app = express();

app.use(express.json()); // JSON 본문을 파싱하기 위한 미들웨어

// // MySQL 연결 설정
// const connection = mysql.createConnection({
// host:conf.host,
// user:conf.user,
// password:conf.password,
// database:conf.database
// });

// connection.connect(); // 데이터베이스에 연결


const router = require('./test');
// 라우터를 앱에 연결
app.use('/', router);

//서버 시작
const PORT = 3800; // 사용할 포트 번호
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`)

});

app.get('/', (req, res) => {
    res.send('Welcome to the server!');
  });

  module.exports =connection;

