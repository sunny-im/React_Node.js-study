import React,{useState} from 'react';
import UserList from './UserList';
import Pagination from './Pagination';
import {Container,Box,Button} from '@material-ui/core';

const Home = () => {
  const [addBtn, setAddBtn] = useState(true);
  const [searchBtn, setSearchBtn] = useState(true);

  return (
  <Container>
    <h1>리벤지빌런</h1>

    <Box className="buttons">
      <Button className="addBtn" variant="outlined" onClick={()=>setAddBtn(!addBtn)}>New Steam User</Button>
      <Button className="searchBtn" variant="outlined" onClick={()=>setSearchBtn(!searchBtn)}>Search</Button>
    </Box>

    <UserList 
      addBtn={addBtn} 
      setAddBtn={setAddBtn} 
      searchBtn={searchBtn} 
      setSearchBtn={setSearchBtn}
      />

      <Pagination />
  </Container>
  )
}

export default Home