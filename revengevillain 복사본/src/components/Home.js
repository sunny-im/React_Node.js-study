import React from 'react';
import Search from './Search';
import UserList from './UserList';
import {Container} from '@material-ui/core';

const Home = () => {
  return (
  <Container>
    <h1>리벤지빌런</h1>
    <Search/>
    <UserList/>
  </Container>
  )
}

export default Home