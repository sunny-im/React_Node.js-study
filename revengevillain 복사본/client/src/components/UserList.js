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

  console.log("steamContent",steamContent)
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
  
    axios.get("/server/text",{
      method : "post",
      headers : {
        "content-type": "application/json",
      },
      body : JSON.stringify(newSteamContent.nickname)
    })
    .then((res)=>res.json())
    .then((json)=>{
      console.log("json",json);
      setNewNickName ({text:json.nickname})
    })
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

  //==============
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
      console.log("insert_res",res)
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

  useEffect(() => {
    axios.get('http://localhost:8000/api/get')
    .then((res)=>{
      console.log("res", res);
      setViewContent(res.data);
    })
  },[])
  console.log("view",viewContent)

  const test = () => {
    axios.get('http://localhost:8000/')
    .then(res=>console.log("test",res))
  }
  return (
  <Container>
    <Button onClick={test}>dsf</Button>
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
              {steamContent.map((item,idx)=>{
                console.log('item',item)
                return(
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
                )}).reverse()}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {!addBtn&&(
      <Grid item xs={2}>
        {/* <InputBox
        steamContent={steamContent}
        setSteamContent={setSteamContent}
        newNickName={newNickName}
        setNewNickName={setNewNickName}
        newType={newType}
        setNewType={setNewType}
        newDate={newDate}
        setNewDate={setNewDate}
        newParameter={newParameter}
        setNewParameter={setNewParameter}
        newImg={newImg}
        setNewImg={setNewImg}
        addBtn={addBtn}
        setAddBtn={setAddBtn}
        /> */}
        <Box className="addField">
				<h4>New Steam User 등록</h4>
				<TextField id="outlined-textarea" label="닉네임" variant="outlined" size="small" multiline name='nickName' onChange={getValue}/>
				<TextField id="outlined-textarea" label="유형" variant="outlined" size="small" multiline name='type' onChange={getValue}/>
				<TextField id="outlined-textarea" label="발생일자" variant="outlined" size="small" multiline name='date' onChange={getValue}/>
				<TextField id="outlined-textarea" label="url 파라미터" variant="outlined" size="small" multiline name='parameter' onChange={getValue}/>
				<Button onClick={handleBtnClick}>이미지업로드</Button>
				<input ref={imgInput} onChange={handleChange} type="file" id="fileUpload" style={{display:"none"}}/>
				<Button variant="outlined" onClick={submitContent}>Submit</Button>
			</Box>
      </Grid>
      )}
    </Grid>
  </Container>
  )
}

export default UserList