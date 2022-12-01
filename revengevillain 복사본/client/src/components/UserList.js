import React, {useState, useEffect, useRef} from 'react'
import {Container, Grid, TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Modal} from '@material-ui/core';
import Search from './Search'
import InputBox from './InputBox'
import axios from 'axios';

const UserList = ({searchBtn,addBtn,setSearchBtn,setAddBtn}) => {
  const [show, setShow] = useState(true);
  const [list, setList] = useState(true);
  const [steamContent, setSteamContent] = useState([]);
  const [open, setOpen] = useState(false);
  const [newImg, setNewImg] = useState('');
  const imgInput = useRef(null);
  const [allContent, setAllContent] = useState({
    nickName: '',
    type : '',
    date : '',
    parameter : '',
    img : ''
  });
  const [searchKeyword, setSearchKeyword] = useState({nickname : '',url : ''});
  const [viewContent, setViewContent] = useState([]);
  const [searchView, setSearchView] = useState([]);
  const [idList, setIdList] = useState('');

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
    // console.log("all",allContent)
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
    axios.post('http://localhost:8000/api/search', {
      nickname : searchKeyword.nickname,
      url : searchKeyword.url,
    })
    .then((res)=>{
      console.log("search",res)
      setSearchView(res.data)
      setList(!list);
    })
    .catch(err=>{console.log("err",err)})
  }

  useEffect(() => {
    axios.get('http://localhost:8000/api/get')
    .then((res)=>{
      // console.log("res", res);
      setViewContent(res.data);
      res.data.map(Id => {
        setIdList(Id.No);
      })
      setList(!list);
    })
  },[])
  // console.log("view",viewContent)

  return (
  <Container>
    <Grid>
      {!searchBtn &&(
        <Search 
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
          onSearch={onSearch}
        />
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
              {list === false ? (
                viewContent.map((item,idx)=>{
                  return(
                    <TableRow hover role="checkbox">
                      <TableCell key={item}>{idx+1}</TableCell>
                      <TableCell><a href={`https://steamcommunity.com/app/${item.url_parameter}`} rel="noreferrer" target="_blank">{item.Nickname}</a></TableCell>
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
                  )}).reverse()
                ):(
                searchView.map((item,idx)=> {
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
                  )}).reverse()
                )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {!addBtn&&(
      <Grid item xs={2}>
      <InputBox
        getValue={getValue}
        handleBtnClick={handleBtnClick}
        submitContent={submitContent}
        allContent={allContent}
        handleChange={handleChange}
        imgInput={imgInput}
        viewContent={viewContent}
      />
      </Grid>
      )}
    </Grid>
  </Container>
  )
}

export default UserList