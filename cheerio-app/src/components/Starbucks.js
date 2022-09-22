import React, {useEffect,useState} from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody  } from '@material-ui/core'

const Starbucks = (props) => {
    const {getData, searchData} = props;
    const [keyword, setKeyword] = useState('');
    return (
    <div>
        <h3>찾고싶은 스타벅스의 매장명 또는 주소를 입력하세요 :)</h3>
        <input type="text" className="form-text" 
            onChange={(e)=>setKeyword(e.target.value)}
        />
        <button type="button" className="form-btn" onClick={()=>{if(keyword) getData(keyword)}}>
        search
        </button>
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