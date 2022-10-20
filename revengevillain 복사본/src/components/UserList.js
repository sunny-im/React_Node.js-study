import React, {useState, useEffect, useRef} from 'react'
import {Container, Grid, TextField, Button, TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Box, Modal} from '@material-ui/core';
import Search from './Search'
import InputBox from './InputBox'
import axios from 'axios';

const UserList = () => {
  const [addBtn, setAddBtn] = useState(true);
  const [searchBtn, setSearchBtn] = useState(true);
  const [show, setShow] = useState(true);
  const [steamContent, setSteamContent] = useState([]);
  const [newNickName, setNewNickName] = useState("");
  const [newType, setNewType] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newParameter, setNewParameter] = useState("");
  const [open, setOpen] = useState(false);
  const [newImg, setNewImg] = useState('');
  const imgInput = useRef(null);
  const [keyword, setKeyword] = useState('');
  const [keywordList, setKeywordList] = useState([]);

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

  //---------modal
  const handleOpen = (img) => {
    setOpen(true);
    setNewImg(img);
    //console.log("setNewImg",newImg)
  };

  const handleClose = () => {
    setOpen(false);
  };
  //---------modal

  //--------업로드한 파일 불러오기
  const handleBtnClick = e => {
    imgInput.current.click();
  };
  const handleChange = e =>{
    const reader = new FileReader();
    const file = imgInput.current.files[0];
    //console.log('file',file)
    
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setNewImg(reader.result);
      //console.log("이미지주소", reader.result); 
    };
    
  };
  //--------업로드한 파일 불러오기

  //-------search
  const onSearch = () => {
    steamContent.filter((itemList) => {
      console.log("itemList",itemList)
      if (itemList.nickname === keyword.nickName || itemList.parameter === keyword.parameter){
        setKeywordList(keyword);
        console.log("123")
      } else if (itemList.nickname !== keyword.nickName || itemList.parameter !== keyword.parameter){
        console.log("456")
        alert("검색결과가 없습니다")
      } else {
        //setKeywordList(itemList);
        console.log("789")
        alert("값을 입력해 주세요!!")
      }
    })
    console.log('keywordList',keywordList)
    console.log('keyword',keyword)
  }
  useEffect(() => {
  })

  return (
  <Container>
    <Box className="buttons">
      <Button className="addBtn" variant="outlined" onClick={()=>setAddBtn(!addBtn)}>New Steam User</Button>
      <Button className="searchBtn" variant="outlined" onClick={()=>setSearchBtn(!searchBtn)}>Search</Button>
    </Box>
    <Grid>
      {!searchBtn &&(
        <Search keyword={keyword} setKeyword={setKeyword} onSearch={onSearch}/>
      )}
    </Grid>
    <Grid container spacing={2}>
      <Grid item xs={addBtn?12:10}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>Nickname</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Image</TableCell>
                {!show &&(
                <TableCell>url_parameter</TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {steamContent.map((item,idx)=>(
                <TableRow hover role="checkbox">
                  <TableCell key={item}>{idx+1}</TableCell>
                  <TableCell><a href={`https://steamcommunity.com/app/${item.parameter}`} target="_blank">{item.nickname}</a></TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>
                    <button className="modalBtn" type="button" onClick={()=>handleOpen(item.img)}>
                      <img className="contentImg" src={item.img}/>
                    </button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="simple-modal-title"
                      aria-describedby="simple-modal-description"
                    >
                      <img className="modalImg" src={newImg} />
                    </Modal>
                  </TableCell>
                  {!show&&(
                  <TableCell>{item.parameter}</TableCell>
                  )}
                </TableRow>
                )).reverse()}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {!addBtn&&(
      <Grid item xs={2}>
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
      </Grid>
      )}
    </Grid>
  </Container>
  )
}

export default UserList