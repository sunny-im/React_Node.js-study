import React, {useState, useRef} from 'react'
import {TextField, Button, Box} from '@material-ui/core';

const InputBox = () => {
  const [addBtn, setAddBtn] = useState(true);
  const [steamContent, setSteamContent] = useState([]);
  const [newNickName, setNewNickName] = useState("");
  const [newType, setNewType] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newParameter, setNewParameter] = useState("");
  const [newImg, setNewImg] = useState('');
  const imgInput = useRef(null);

  const onSubmit = () => {
    const newSteamContent = {
      nickname: newNickName,
      type : newType,
      date : newDate,
      parameter : newParameter,
      img : newImg
    }
    setSteamContent([...steamContent, newSteamContent]);
    setNewNickName('');
    setNewType('');
    setNewDate('');
    setNewParameter('');
    setNewImg('');
    setAddBtn(true);
  
  }
    //--------업로드한 파일 불러오기
    const handleBtnClick = e => {
        imgInput.current.click();
      };
      const handleChange = e =>{
        const reader = new FileReader();
        const file = imgInput.current.files[0];
        
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setNewImg(reader.result);
        };
        
      };
      //--------업로드한 파일 불러오기
  return (
    <div>
        <Box className="addField">
          <h4>New Steam User 등록</h4>
          <TextField id="outlined-textarea" label="닉네임" variant="outlined" size="small" multiline value={newNickName} onChange={(e) => setNewNickName(e.target.value)}/>
          <TextField id="outlined-textarea" label="유형" variant="outlined" size="small" multiline name='type' value={newType} onChange={(e) => setNewType(e.target.value)}/>
          <TextField id="outlined-textarea" label="발생일자" variant="outlined" size="small" multiline name='date' value={newDate} onChange={(e) => setNewDate(e.target.value)}/>
          <TextField id="outlined-textarea" label="url 파라미터" variant="outlined" size="small" multiline name='parameter' value={newParameter} onChange={(e) => setNewParameter(e.target.value)}/>
          <Button onClick={handleBtnClick}>이미지업로드</Button>
          <input ref={imgInput} onChange={handleChange} type="file" id="fileUpload" style={{display:"none"}}/>
          <Button variant="outlined" onClick={()=>{onSubmit()}}>Submit</Button>
        </Box>
    </div>
  )
}

export default InputBox