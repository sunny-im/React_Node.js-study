import React from 'react'
import {Table,TableHead,TableRow,TableBody,TableCell} from '@material-ui/core';

const NaverKeyword = ({keywordList,seletedAdgroupName}) => {
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{color:"red"}}>{seletedAdgroupName}</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {keywordList.map((keyword,idx)=>{
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