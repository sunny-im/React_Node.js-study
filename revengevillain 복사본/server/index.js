const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const PORT = process.env.port || 8000;
const cors = require('cors');

const db = mysql.createPool({
  host : "localhost",
  user : "root",
  password : "1234",
  database : "revengevillain",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
  const sqlQuery = "SELECT * FROM steamBoard;";
  db.query(sqlQuery, (err, result)=>{
      res.send(result);
  })
});

// select
app.get("/api/get", (req,res) => {
  const sqlQuery = "SELECT No,Nickname,url_parameter,type,occurDate as date FROM steamBoard";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  })
})

// insert
app.post("/api/insert",(req,res)=>{
  const nickName = req.body.nickName;
  const sqlQuery = "INSERT INTO steamBoard (nickname,url_parameter,type,occurDate) VALUES (?,?,?,?)";
  db.query(sqlQuery, [nickName], (err,result)=>{
    res.send('success');
  })
})


app.listen(PORT, ()=>{
  console.log(`running on port ${PORT}`);
});  