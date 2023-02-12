import React from 'react';
import { styled } from '@mui/material/styles';
import {Box,Grid,Divider} from '@mui/material';

const Dashboard = () => {
  const MyGird = styled(Grid)({
    padding: `30px`,
  });
  const MyDivider = styled(Divider)({
    padding: `10px`,
  });
  const VerticalDivider = styled(Divider)({
    height: `100vh`
  });
  const CalandarBox = styled(Box)({
    height: `60%`, width: `30vw`,
  });

  return (
    <Box>
      <MyGird container>
        <Grid xs={7}>
          today<br></br>
          2023.02.09
          <MyDivider/>
        </Grid>
        <VerticalDivider orientation="vertical" flexItem />
        <Grid xs={2} style={{maxWidth: '40%'}}>
          <CalandarBox>
          calandar
          </CalandarBox>
          <Divider/>
          Today or Week<br></br>
          Todo list
        </Grid>
      </MyGird>
    </Box>
  )
}

export default Dashboard