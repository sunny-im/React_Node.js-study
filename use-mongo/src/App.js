import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

function App() {
  //==============================================================
  const [content, setContent] = useState({
    name:'',
    address:'',
    age:''
  })
  //==============================================================
  const connectMongo = () => {
    axios.get('http://localhost:8001/')
    .then((res)=>{
      console.log("res",res);
    })
  }
  //==============================================================
  const getValue = (e) => {
    const {name,value} = e.target;
    setContent({
      ...content,
      [name] : value
    });
    console.log('content',content);
  };
  //==============================================================
  const submit = () => {
    axios.post('http://localhost:8001/insert', {
      name : content.name,
      address : content.address,
      age : content.age,
    })
  }

  return (
    <div>
      <button onClick={connectMongo}>연결?</button><br></br>
      이름 : <input name='name' onChange={getValue}/><br></br>
      주소 : <input name='address' onChange={getValue}/><br></br>
      나이 : <input name='age' onChange={getValue}/><br></br>
      <button onClick={submit}>등록</button>
    </div>
  );
}

export default App;
