import React, {useState, useEffect} from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser';
import axios from 'axios';

const Board = () => {
  // 입력한 내용 state에 저장
  const [allContent, setAllContent] = useState({
    title : '',
    content : ''
  })

  const [viewContent, setViewContent] = useState([]);


  // 포트 8000으로 값 전송! 데이터를 post방식으로 보내고 완료 시 alert
  const submitContent = () =>{
    axios.post('http://localhost:8001/api/insert' , {
      title : allContent.title,
      content : allContent.content
    })
    .then(()=>{
      alert('등록성공!');
    })
  };

  // 이벤트가 발생하면 (input에 텍스트를 입력하면) 이벤트의 name과 value를 가져온다
  const getValue = e => {
    const {name, value} = e.target;
    setAllContent({
      ...allContent,
      [name]:value
    })
  }
  
  const ckHandle = (event, editor) => {
    const data = editor.getData();
    console.log({event, editor, data});
    setAllContent({
      ...allContent,
      content : data
    })
  }

  useEffect(()=>{
    axios.get('http://localhost:8001/api/get')
    .then((res)=>{
      // console.log("res", res)
      setViewContent(res.data);
    })
    // console.log("viewContent",viewContent)
  },[viewContent])
  // useEffect에 빈 배열[]을 넣으면 처음 1회만 랜더링된다.. 새로고침을 해도 계속 값을 불러오기 위해 viewContent

  const test = () => {
    axios.get('http://localhost:8001/')
    .then(res=>console.log("test",res))
  }
  return (
    <div>
      <button onClick={test}>asdf</button>
      <h1>무엇이든 적어주세용</h1>
      <table>
        <thead>
          <tr>
            <th>NO</th>
            <th>제목</th>
            <th>내용</th>
            <th>날짜</th>
          </tr>
        </thead>
        {viewContent.map(item=>{
          return(
          <tbody>
            <tr>
              <td>{item.No}</td>
              <td>{item.title}</td>
              {/* CKEditor에서 DB 저장 시 태그까지 같이 저장되므로 해당 부분 parser */}
              <td>{ReactHtmlParser(item.content)}</td>  
              <td>{item.date}</td>
            </tr>
          </tbody>
          )
        })}
      </table>
      <div>
        <input type="text" placeholder='제목' name='title' onChange={getValue}/><br></br>
        <CKEditor
        editor={ClassicEditor} 
        data="HELLO !!!!!" 
        onReady = {editor=>{}}
        onChange = {ckHandle}
        onBlur={(event,editor)=>{console.log("blur", editor)}}
        onFocus={(event,editor)=>{console.log("focus",editor)}}/>
      </div>
      <lable><input type="checkbox"/>하하하</lable>
      <button onClick={submitContent}>입력</button>
    </div>
  )
}

export default Board