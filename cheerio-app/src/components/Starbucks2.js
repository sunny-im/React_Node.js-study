import React, {useEffect,useState} from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody  } from '@material-ui/core'

// 검색어를 역삼으로 두고 크롤링 한 버전
const Starbucks = (props) => {
    const {getData, searchData} = props;
    const [keyword, setKeyword] = useState('');
    return (
    <div>
        <h3>"역삼" 키워드로 찾은 스타벅스 매장입니다 :) </h3>
        <TableContainer>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <TableCell>No</TableCell>
                        <TableCell>Store</TableCell>
                        <TableCell>Address&Tel</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {searchData.map((item,idx) => {
                    return (
                    <TableRow>
                        <TableCell>{idx+1}</TableCell>
                        <TableCell>{item.store ? `${item.store}` : "결과값없음"}</TableCell>
                        <TableCell>{item.addrTel ? `${item.addrTel}` : "결과값없음"}</TableCell>
                    </TableRow>

                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
    )
}

export default Starbucks