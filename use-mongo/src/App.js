import './App.css';
import React, {useState,useEffect} from 'react';
import axios from 'axios';

function App() {
  //==============================================================
  const [data, setData] = useState('');
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
      setData(res.data);
    })
  }
  console.log(data)
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
    });
    alert('등록완료');
  }
  //==============================================================
  useEffect(()=>{
  },[])

  return (
    <div>
      이름 : <input name='name' onChange={getValue}/><br></br>
      주소 : <input name='address' onChange={getValue}/><br></br>
      나이 : <input name='age' onChange={getValue}/><br></br>
      <button onClick={submit}>등록</button><br></br>
      ----------------------------------------------------<br></br>
      <button onClick={()=>connectMongo()}>데이터 가져오기</button><br></br>
      <table>
        <thead>
          <tr>
            <th>_id</th>
            <th>name</th>
            <th>address</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {data.length !== 0 && (
          data.map(item =>{
            return (
              <tr>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>{item.age}</td>
              </tr>
            )
          }))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
