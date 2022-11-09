const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const PORT = process.env.port || 8000;
const cors = require('cors');

// DB 연결 객체
const db = mysql.createPool({
  host : "localhost",
  user : "root",
  password : "1234",
  database : "testDB"
});

// app.js에서 cors, express.json 사용 | extended: true => 옵션은 true일 경우 따로 설치가 필요한 npm qs 라이브러리를 사용(false일 경우 node.js에 기본적으로 내장되어있는 qs 라이브러리 사용)
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res)=>{
  const sqlQuery = "INSERT INTO board (title, content) VALUES ('hihi11', '안뇽안뇽11')";
  db.query(sqlQuery, (err, result)=>{
      res.send('success!');
  });
})


// api/get 경로로 들어온 쿼리 결과값 or 에러 출력
app.get("/api/get", (req,res) => {
  const sqlQuery = "SELECT No,title,content,DATE_FORMAT(date,'%Y-%m-%d') as date FROM board";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  })
})

// 값 삽입
app.post("/api/insert", (req,res)=>{
  const title = req.body.title;
  const content = req.body.content;
  const sqlQuery = "INSERT INTO board (title,content) VALUES (?,?)";
  db.query(sqlQuery, [title,content], (err, result)=>{
    res.send('success!!!!');
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});