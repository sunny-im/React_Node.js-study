import React, {useState, useEffect} from 'react'
import {Container, Grid, TextField, Button, Paper, TableContainer, Table, TableHead, TableRow, TableBody, TableCell} from '@material-ui/core';
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
    <Grid>
      {!addBtn&&(
      <Paper>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Nickname</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>url_parameter</TableCell>
                <TableCell>Submit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><TextField id="filled-basic" label="Nickname" variant="filled" value={newNickName} onChange={(e) => setNewNickName(e.target.value)}/></TableCell>
                <TableCell><TextField id="filled-basic" label="Type" variant="filled" name='type' value={newType} onChange={(e) => setNewType(e.target.value)}/></TableCell>
                <TableCell><TextField id="filled-basic" label="Date" variant="filled" name='date' value={newDate} onChange={(e) => setNewDate(e.target.value)}/></TableCell>
                <TableCell><TextField id="filled-basic" label="Image" variant="filled" /></TableCell>
                <TableCell><TextField id="filled-basic" label="url_parameter" variant="filled" name='parameter' value={newParameter} onChange={(e) => setNewParameter(e.target.value)}/></TableCell>
                <TableCell><Button variant="outlined" color="secondary" onClick={()=>{onSubmit()}}>Submit</Button></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      )}
    </Grid>
    <Grid>
      <Paper>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>Nickname</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Image</TableCell>
                {!show&&(
                <TableCell>url_parameter</TableCell>
                )}
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
      </Paper>
    </Grid>
  </Container>
  )
}

export default Home