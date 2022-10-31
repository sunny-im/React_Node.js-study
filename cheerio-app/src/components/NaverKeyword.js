import React from 'react'
import {Grid,Container,Paper,TableContainer,Table,TableHead,TableRow,TableBody,TableCell} from '@material-ui/core';

const NaverKeyword = (props) => {
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{color:"red"}}>{props.seletedAdgroupName}</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {props.keywordList.map((keyword,idx)=>{
            return (
          <TableRow>
              <TableCell key={idx}>{keyword.keyword}</TableCell>
          </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  )
}

export default NaverKeyword