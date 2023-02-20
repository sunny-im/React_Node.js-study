const express = require('express');
const app = express();
const PORT = 8001;
const cors = require('cors');
const router = express.Router();
require('dotenv').config();

app.use(cors());
app.use(express.json());
//==============================================================
const mongoose = require('mongoose');

const MONGO_ID = process.env.MONGO_ID;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_URL = `mongodb://${MONGO_ID}:${MONGO_PASSWORD}@localhost:27017/admin`;

mongoose.connect(MONGO_URL);
const db = mongoose.connection;
db.on('error', () => {console.log('연결실패',error)});
db.once('open', ()=> {console.log('연결성공')});

const student = mongoose.Schema({
  name : 'string',
  address : 'string',
  age : 'number'
});

const Student = mongoose.model('Schema', student);

//==============================================================

app.get('/',(req,res)=> {
  res.send('hihihi')
});

app.post('/insert',(req,res) => {
  const name = req.body.name;
  const address = req.body.address;
  const age = req.body.age;
  const newStudent = new Student({name:name, address:address, age:age});
  newStudent.save((error,data)=> {
    if(error) {console.log(error);}
    else{console.log('저장완료!')}
  });
})


//==============================================================
app.listen(PORT, () => {
  console.log(`running on PORT ${PORT}`);
})