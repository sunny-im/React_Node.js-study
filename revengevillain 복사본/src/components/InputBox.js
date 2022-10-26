import React,{useState, useRef}  from 'react'
import {Container, Grid, TextField, Button, TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Box, Modal} from '@material-ui/core';

const InputBox = (props) => {
  const imgInput = useRef(null);
  const [keyword, setKeyword] = useState('');
  const [keywordList, setKeywordList] = useState([]);

	const onSubmit = () => {
    const newSteamContent = {
      nickname: props.newNickName,
      type : props.newType,
      date : props.newDate,
      parameter : props.newParameter,
      img : props.newImg
    }
    props.setSteamContent([...props.steamContent, props.newSteamContent]);
    props.setNewNickName('');
    props.setNewType('');
    props.setNewDate('');
    props.setNewParameter('');
    props.setNewImg('');
    props.setAddBtn(true);
  }
	console.log("props.setSteamContent22",props.steamContent)

	const handleBtnClick = e => {
    imgInput.current.click();
  };
  const handleChange = e =>{
    const reader = new FileReader();
    const file = imgInput.current.files[0];
    
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      props.setNewImg(reader.result);
    };
    
  };
	return (
		<div>
			<Box className="addField">
				<h4>New Steam User 등록</h4>
				<TextField id="outlined-textarea" label="닉네임" variant="outlined" size="small" multiline value={props.newNickName} onChange={(e) => props.setNewNickName(e.target.value)}/>
				<TextField id="outlined-textarea" label="유형" variant="outlined" size="small" multiline name='type' value={props.newType} onChange={(e) => props.setNewType(e.target.value)}/>
				<TextField id="outlined-textarea" label="발생일자" variant="outlined" size="small" multiline name='date' value={props.newDate} onChange={(e) => props.setNewDate(e.target.value)}/>
				<TextField id="outlined-textarea" label="url 파라미터" variant="outlined" size="small" multiline name='parameter' value={props.newParameter} onChange={(e) => props.setNewParameter(e.target.value)}/>
				<Button onClick={handleBtnClick}>이미지업로드</Button>
				<input ref={imgInput} onChange={handleChange} type="file" id="fileUpload" style={{display:"none"}}/>
				<Button variant="outlined" onClick={()=>{onSubmit()}}>Submit</Button>
			</Box>
		</div>
	)
}

export default InputBox