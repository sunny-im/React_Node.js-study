const express = require('express');
const mysql = require("mysql");
const app = express();
const PORT = process.env.port || 8000;

const db = mysql.createPool({
  host : "localhost",
  user : "root",
  password : "1234",
  database : "revengevillain",
});

app.get("/",(req,res)=>{
  const sqlQuery = "SELECT * FROM steamBoard;";
  db.query(sqlQuery, (err, result)=>{
      res.send(result);
  })
});

app.post("/text",(req,res)=>{
  const nickName = req.body.nickName;
  console.log(nickName)
})
app.listen(PORT, ()=>{
  console.log(`running on port ${PORT}`);
});  