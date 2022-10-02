import React, {useState, useEffect} from 'react'
import {Container, Grid, TextField, Button, Paper, TableContainer, Table, TableHead, TableRow, TableBody, TableCell} from '@material-ui/core';
import axios from 'axios';

const Home = () => {
  const [addBtn, setAddBtn] = useState(true);
  const [show, setShow] = useState(true);

  useEffect(() => {
    axios.get('/api/test')
      .then(res => console.log(res))
      .catch()
    console.log("123")
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
                <TableCell><TextField id="filled-basic" label="Nickname" variant="filled" /></TableCell>
                <TableCell><TextField id="filled-basic" label="Type" variant="filled" /></TableCell>
                <TableCell><TextField id="filled-basic" label="Date" variant="filled" /></TableCell>
                <TableCell><TextField id="filled-basic" label="Image" variant="filled" /></TableCell>
                <TableCell><TextField id="filled-basic" label="url_parameter" variant="filled" /></TableCell>
                <TableCell><Button variant="outlined" color="secondary">Submit</Button></TableCell>
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
              <TableRow hover role="checkbox">
                <TableCell>1</TableCell>
                <TableCell><a href="https://naver.com">리벤지빌런</a></TableCell>
                <TableCell>조작</TableCell>
                <TableCell>2022-10-02</TableCell>
                <TableCell>사진</TableCell>
                {!show&&(
                <TableCell>234252</TableCell>
                )}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Grid>

  </Container>
  )
}

export default Home