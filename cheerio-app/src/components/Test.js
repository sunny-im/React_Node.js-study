import React,{useState} from 'react'
import {Grid,Container,Paper,TableContainer,Table,TableHead,TableRow,TableBody,TableCell} from '@material-ui/core';

const Test = () => {
  const [open, setOpen]=useState(false);
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6}>
        <TableContainer component={Paper}>
          <Table>

            <TableHead>
              <TableRow>
                <TableCell>Campaign Name</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
                <TableRow onClick={()=>setOpen(!open)} >
                  <TableCell>campaign.name

                {open&&(
                <Grid item xs={6}>
                <TableRow>
                  <TableCell>
                    <Table>
                      <TableRow>
                        <TableCell>광고그룹 이름</TableCell>
                      </TableRow>
                    </Table>
                  </TableCell>
                </TableRow>
                </Grid>
              )}

                  </TableCell>
                </TableRow>



            </TableBody>
          </Table>
        </TableContainer>
        </Grid>
        {open&&(
          <Grid item xs={6}>
            sdf
          </Grid>
        )}
      </Grid>
    </Container>
  )
}

export default Test