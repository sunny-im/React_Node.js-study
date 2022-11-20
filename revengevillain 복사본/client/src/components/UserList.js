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
  const [open, setOpen] = useState(false);
  const [newImg, setNewImg] = useState('');
  const imgInput = useRef(null);
  const [keyword, setKeyword] = useState('');
  const [keywordList, setKeywordList] = useState([]);

  const [allContent, setAllContent] = useState({
    nickName: '',
    type : '',
    date : '',
    parameter : '',
    img : ''
  });

  const [viewContent, setViewContent] = useState([]);

  const submitContent = () => {
    axios.post('http://localhost:8000/api/insert', {
      nickname : allContent.nickName,
      type : allContent.type,
      date : allContent.date,
      parameter : allContent.parameter,
      img : newImg
    })
    .then((res)=>{
      alert('저장되었습니다 :)')
      setAddBtn(true);
    })
  };

  const getValue = e => {
    const {name,value} = e.target;
    setAllContent({
      ...allContent,
      [name] : value
    })
    console.log("all",allContent)
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
      } else if (keyword.nickName.length === 0 || keyword.parameter.length === 0){
        console.log("456")
        alert("값을 입력해주세요 !!")
      } else {
        //setKeywordList(itemList);
        console.log("789")
        alert("검색결과가 없습니다.")
      }
    })
    console.log('keywordList',keywordList)
    console.log('keyword',keyword)
  }

  useEffect(() => {
    axios.get('http://localhost:8000/api/get')
    .then((res)=>{
      // console.log("res", res);
      setViewContent(res.data);
    })
  },[viewContent])
  // console.log("view",viewContent)

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
              {viewContent.map((item,idx)=>{
                // console.log('item',item)
                return(
                <TableRow hover role="checkbox">
                  <TableCell key={item}>{idx+1}</TableCell>
                  <TableCell><a href={`https://steamcommunity.com/app/${item.url_parameter}`} target="_blank">{item.Nickname}</a></TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.occurDate}</TableCell>
                  <TableCell>
                    <button className="modalBtn" type="button" onClick={()=>handleOpen(item.image)}>
                      <img className="contentImg" src={item.image}/>
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
                )}).reverse()}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {!addBtn&&(
      <Grid item xs={2}>
        {/* <Box className="addField">
				<h4>New Steam User 등록</h4>
				<TextField id="outlined-textarea" label="닉네임" variant="outlined" size="small" multiline name='nickName' onChange={getValue}/>
				<TextField id="outlined-textarea" label="유형" variant="outlined" size="small" multiline name='type' onChange={getValue}/>
				<TextField id="outlined-textarea" label="발생일자" variant="outlined" size="small" multiline name='date' onChange={getValue}/>
				<TextField id="outlined-textarea" label="url 파라미터" variant="outlined" size="small" multiline name='parameter' onChange={getValue}/>
				<Button onClick={handleBtnClick}>이미지업로드</Button>
				<input ref={imgInput} onChange={handleChange} type="file" id="fileUpload" style={{display:"none"}}/>
				<Button variant="outlined" onClick={submitContent}>Submit</Button>
			</Box> */}
      <InputBox
        getValue={getValue}
        handleBtnClick={handleBtnClick}
        submitContent={submitContent}
        allContent={allContent}
        handleChange={handleChange}
        imgInput={imgInput}
      />
      </Grid>
      )}
    </Grid>
  </Container>
  )
}

export default UserList