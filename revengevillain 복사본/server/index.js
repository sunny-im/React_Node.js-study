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
    const sqlQuery = "INSERT INTO comment (comment) VALUES ('hi')";
    db.query(sqlQuery, (err, result)=>{
        console.log("err",err)
        res.send("success!");
    })
});
app.listen(PORT, ()=>{
    console.log(`running on port ${PORT}`);
});