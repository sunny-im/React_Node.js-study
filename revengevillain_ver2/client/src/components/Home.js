import React,{useState} from 'react';
import UserList from './UserList';
import {Container,Box,Button} from '@material-ui/core';

const Home = () => {
  const [addBtn, setAddBtn] = useState(true);
  const [searchBtn, setSearchBtn] = useState(true);

  return (
  <Container>
    <h1>kr_simba</h1>

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

  </Container>
  )
}
export default Home