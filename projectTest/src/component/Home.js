import React from 'react'
import { styled } from '@mui/material/styles';
import {Grid,Box} from '@mui/material';
import Nav from './Nav';
import Dashboard from '../page/Dashboard/Dashboard'

const Home = () => {
  const WholeBox = styled(Box)({
    backgroundColor: `#07553B`,
  });
  const DashboardGrid = styled(Grid)({
    border: `1px solid #fff`,
    borderRadius: `70px`,
    background: `#fff`,
    margin: `8px -8px` 
  });
  return (
    <WholeBox>
      <Grid container>
        <Grid xs={3}>
          <Nav/>
        </Grid>
        <DashboardGrid xs={9}>
          <Dashboard/>
        </DashboardGrid>
      </Grid>
    </WholeBox>
  )
}

export default Home