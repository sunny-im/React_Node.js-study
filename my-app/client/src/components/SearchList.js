import React from "react";
import SearchItem from "./SearchItem";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody  } from '@material-ui/core'


const SearchList = ({searchData}) => {
    // const { searchData } = props;
    return (
        <div>
        <TableContainer>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <TableCell>No</TableCell>
                        <TableCell>Store</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Comment</TableCell>
                        <TableCell>Open</TableCell>
                        <TableCell>Score</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {searchData.map((item,idx) => {
                    return (
                    <TableRow>
                        <TableCell>{idx+1}</TableCell>
                        <TableCell>{item.store ? `${item.store}` : "결과값없음"}</TableCell>
                        <TableCell>{item.type ? `${item.type}` : "결과값없음"}</TableCell>
                        <TableCell>{item.comment ? `${item.comment}` : "결과값없음"}</TableCell>
                        <TableCell>{item.open ? `${item.open}` : "결과값없음"}</TableCell>
                        <TableCell>{item.score ? `${item.score}점` : "평점없음"}</TableCell>
                    </TableRow>

                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
};

export default SearchList;