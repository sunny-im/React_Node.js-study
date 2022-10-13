import React, {useState, useEffect, useRef} from 'react'
import {Container, Grid, TextField, Button, TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Box, Modal} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const Home = () => {
  const [addBtn, setAddBtn] = useState(true);
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
  // const searchItem = (e) => {
  //   e.preventDefault();
  //   dispatchEvent({type:"SEARCH_ITEM", payload:{keyword}})
  // }

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
  //console.log('steamContent',steamContent)

  //---------modal
  const handleOpen = (img) => {
    console.log("asdfasdf",img)
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
      console.log(itemList)
      if (itemList.nickname === keyword || itemList.parameter === keyword){
        setKeywordList(keyword);
      } else {
        setKeywordList(itemList);
      }
    })
    console.log('keywordList',keywordList)
  }
  useEffect(() => {
    // axios.get('/api/test')
    //   .then(res => console.log(res))
    //   .catch()
  })

  return (
  <Container>
    <h1>리벤지빌런</h1>
    <Grid className='search'>
      <TextField className="searchBox" id="filled-basic" label="닉네임 또는 steam url을 입력하세요" variant="filled" onChange={(e)=>setKeyword(e.target.value)}/>
      <Button className="searchBtn" variant="outlined" color="secondary" onClick={onSearch}>Search</Button>
      <Button className="searchBtn" variant="outlined" color="secondary" onClick={()=>setAddBtn(!addBtn)}>Add</Button>
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
            <TextField id="outlined-textarea" label="닉네임" variant="outlined" multiline value={newNickName} onChange={(e) => setNewNickName(e.target.value)}/>
            <TextField id="outlined-textarea" label="유형" variant="outlined" multiline name='type' value={newType} onChange={(e) => setNewType(e.target.value)}/>
            <TextField id="outlined-textarea" label="발생일자" variant="outlined" multiline name='date' value={newDate} onChange={(e) => setNewDate(e.target.value)}/>
            <TextField id="outlined-textarea" label="url 파라미터" variant="outlined" multiline name='parameter' value={newParameter} onChange={(e) => setNewParameter(e.target.value)}/>
            <Button onClick={handleBtnClick} color="primary">이미지업로드</Button><input ref={imgInput} onChange={handleChange} type="file" id="fileUpload" style={{display:"none"}}/>
            <Button variant="outlined" color="secondary" onClick={()=>{onSubmit()}}>Submit</Button>
        </Box>
      </Grid>
      )}
    </Grid>
  </Container>
  )
}

export default Home