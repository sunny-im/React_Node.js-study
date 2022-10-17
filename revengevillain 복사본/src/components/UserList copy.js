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

  //---------modal
  const handleOpen = (img) => {
    setOpen(true);
    setNewImg(img);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //---------modal

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
        <Search/>
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
        <InputBox/>
      </Grid>
      )}
    </Grid>
  </Container>
  )
}

export default UserList