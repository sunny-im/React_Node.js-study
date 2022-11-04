import React from 'react'
import {Paper,Table,TableHead,TableRow,TableBody,TableCell, Container} from '@material-ui/core';

const NaverKeyword = ({keywordList,seletedAdgroupName,statList,keywordIdList,}) => {
  console.log("props.statList",statList)
  console.log("props.keywordIdList",keywordIdList)
  return (
    <Container>
      <Table component={Paper}>
        <TableHead>
          <TableRow>
            <TableCell align="center" style={{color:"red"}} colSpan="8">광고그룹 : {seletedAdgroupName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" style={{fontWeight:"bold", fontSize:"18px"}} colSpan="8">키워드<span style={{fontSize:"13px"}}>(전일자)</span></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>키워드명</TableCell>
            <TableCell>평균노출순위</TableCell>
            <TableCell>전환수</TableCell>
            <TableCell>클릭수</TableCell>
            <TableCell>평균클릭비용</TableCell>
            <TableCell>클릭률</TableCell>
            <TableCell>노출수</TableCell>
            <TableCell>총비용</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {keywordList.map((keyword,idx)=>{
            console.log("stat",statList)
            return(
              <TableRow>
                <TableCell key={idx} align="center">{keyword.keyword}</TableCell>
              </TableRow>
              )
          })}
        </TableBody>
      </Table>


    </Container>
  )
}

export default NaverKeyword;