import React, {useState, useEffect} from 'react'
import {Container, Grid, TextField, Button, TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Box, Label} from '@material-ui/core';
import axios from 'axios';

const Home = () => {
  const [addBtn, setAddBtn] = useState(true);
  const [show, setShow] = useState(true);
  const [steamContent, setSteamContent] = useState([]);
  const [newNickName, setNewNickName] = useState("");
  const [newType, setNewType] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newParameter, setNewParameter] = useState("");

  const onSubmit = () => {
    const newSteamContent = {
      nickname: newNickName,
      type : newType,
      date : newDate,
      parameter : newParameter
    }
    setSteamContent([...steamContent, newSteamContent]);
    setNewNickName('');
    setNewType('');
    setNewDate('');
    setNewParameter('');
    setAddBtn(true);
  
  }
  console.log('steamContent',steamContent)

  useEffect(() => {
    // axios.get('/api/test')
    //   .then(res => console.log(res))
    //   .catch()
  })

  return (
  <Container>
    <h1>리벤지빌런</h1>
    <Grid className='search'>
      <TextField className="searchBox" id="filled-basic" label="닉네임 또는 steam url을 입력하세요" variant="filled" />
      <Button className="searchBtn" variant="outlined" color="secondary">Search</Button>
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
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {steamContent.map((item,idx)=>(
                <TableRow hover role="checkbox">
                  <TableCell key={item}>{idx+1}</TableCell>
                  <TableCell><a href="https://naver.com">{item.nickname}</a></TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>사진</TableCell>
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
            <TextField id="outlined-textarea" label="이미지" variant="outlined" multiline />
            <TextField id="outlined-textarea" label="url 파라미터" variant="outlined" multiline name='parameter' value={newParameter} onChange={(e) => setNewParameter(e.target.value)}/>
            <Button variant="outlined" color="secondary" onClick={()=>{onSubmit()}}>Submit</Button>
        </Box>
      </Grid>
      )}
    </Grid>
  </Container>
  )
}

export default Home