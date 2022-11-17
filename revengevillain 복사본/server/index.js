const express = require('express');
const app = express();
const mysql = require('mysql');
const PORT = process.env.port || 8000;
const cors = require('cors');

const db = mysql.createPool({
  host : "localhost",
  user : "root",
  password : "1234",
  database : "revengevillain"
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
  const sqlQuery = "SELECT No,Nickname,url_parameter,type,occurDate,image FROM steamBoard";
  db.query(sqlQuery, (err, result) => {
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


app.listen(PORT, ()=>{
  console.log(`running on port ${PORT}`);
});  