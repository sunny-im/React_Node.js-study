const express = require('express');
const app = express();
const mysql = require('mysql');
const PORT = process.env.port || 8000;
const cors = require('cors');

const db = mysql.createPool({
  host : "localhost",
  user : "root",
  password : "1234",
  database : "revengevillain",
  multipleStatements: true
});

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
  const sqlQuery = "INSERT INTO steamBoard (Nickname) VALUES ('test');";
  db.query(sqlQuery, (err, result)=>{
      res.send(result);
  })
});

// select
app.get("/api/get", (req,res) => {
  const sqlQuery = "SELECT No,Nickname,url_parameter,type,occurDate,image FROM steamBoard;";
  const countQuery = "SELECT COUNT(*) as count FROM steamBoard;";
  db.query(sqlQuery+countQuery, (err, result, field) => {
    // console.log(result[0])
    // console.log(result[1])
    res.send(result);
  })
})

// insert
app.post("/api/insert",(req,res)=>{
  const nickName = req.body.nickname;
  const type = req.body.type;
  const date = req.body.date;
  const parameter = req.body.parameter;
  const img = req.body.img;
  const sqlQuery = `INSERT INTO steamBoard (Nickname,url_parameter,type,occurDate,image) VALUES ('${nickName}','${parameter}','${type}','${date}','${img}')`;
  db.query(sqlQuery,(err,result)=>{
    res.send(result);
    console.log("result",result)
  })
})

// search
app.post("/api/search",(req,res)=>{
  const nickname = req.body.nickname;
  const url = req.body.url;

  let where = 'WHERE ';
  if(nickname.length !== 0 && url.length === 0) {
    where += `Nickname='${nickname}';`;
  } else if (nickname.length === 0 && url.length !== 0) {
    where += `url_parameter='${url}';`;
  } else if (nickname.length === 0 && url.length === 0){
    where += `Nickname='${nickname}' AND url_parameter='${url}';`;
  }

  const sqlQuery = `SELECT * FROM steamBoard ${where}`;
  const countQuery = `SELECT COUNT(*) as count FROM steamBoard ${where}`;

  console.log("nickname",nickname.length);
  console.log("url",url.length);

  console.log("sqlQuery",sqlQuery);
  db.query(sqlQuery+countQuery,(err,result)=>{
    res.send(result);
    // console.log("search",result)
  })
})


app.listen(PORT, ()=>{
  console.log(`running on port ${PORT}`);
});  