const express = require('express');
const app = express();
const PORT = 8001;
const cors = require('cors');
const router = express.Router();
require('dotenv').config();

app.use(cors());
app.use(express.json());
//==============================================================
// 1.mongoose 모듈
const mongoose = require('mongoose');

const MONGO_ID = process.env.MONGO_ID;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_URL = `mongodb://${MONGO_ID}:${MONGO_PASSWORD}@localhost:27017/admin`;

// 2. DB 셋팅
mongoose.connect(MONGO_URL);

// 3. 연결된 DB 사용
const db = mongoose.connection;
// 4. 실패 , 성공
db.on('error', () => {console.log('연결실패',error)});
db.once('open', ()=> {console.log('연결성공')});


// 6. Schema 생성 (입력될 데이터의 타임이 정의된 DB 설계도)
const student = mongoose.Schema({
  name : 'string',
  address : 'string',
  age : 'number'
});

// 7. 정의된 스키마를 객체처럼 사용할 수 있도록 model() 함수로 컴파일
const Student = mongoose.model('Schema', student);

// 8. Student 객체를 new 로 생성해서 값을 입력
const newStudent = new Student({name:'sunny123', address:'서울시', age : '1234'});

// 9. 데이터 저장
newStudent.save((error,data)=> {
  if(error) {console.log(error);}
  else{console.log('저장완료!')}
});

// 10. Student 레퍼런스 전체 데이터 가져오기
Student.find((error,students) => {
  console.log('------전체 데이터-------');
  if(error){console.log('에러',error);}
  else{console.log('students',students);}
});

// 11. 특정 아이디값 가져오기
Student.findOne({_id:'63f344e9f37b69717511c3d7'}, (err,student) => {
  console.log('-----특정id값 가져오기------');
  if(err){console.log('에러',err);}
  else{console.log('student',student);}
});

// 12. 특정 아이디 수정하기
Student.findById({_id:'63f344e9f37b69717511c3d7'}, (err,student) => {
  console.log('-------update(put)--------');
  if(err){console.log('에러',err);}
  else{
    student.name = '써니';
    student.save((err,modified_student) => {
      if(err){console.log('에러',err);}
      else{console.log('modified_student',modified_student);}
    });
  }
});

// 13. 삭제
Student.remove({_id:'63f347142f56de5fb84fa969'}, (err,output) => {
  console.log('------delete-------');
  if(err){console.log('에러',err);}
  console.log('-----삭제(?)-------')
});

//==============================================================

app.get('/',(req,res)=> {
  res.send('hihihi')
});

//==============================================================
app.listen(PORT, () => {
  console.log(`running on PORT ${PORT}`);
})