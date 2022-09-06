import React, {useState, useEffect} from 'react'
import CryptoJS from 'crypto-js';
import axios from 'axios';
import { Container, Table, TableHead, TableRow, TableCell, TableBody, CircularProgress  } from '@material-ui/core';

const NaverAPI = () => {
    const[keyword, setKeyword] = useState([]);
    const[loading, setLoading] = useState(true);
    const method = "GET";
    const api_url = "/keywordstool";
    const timestamp = Date.now() + '';
    const NAVER_AD_ACCESS = process.env.REACT_APP_NAVER_AD_ACCESS;
    const NAVER_AD_SECRET = process.env.REACT_APP_NAVER_AD_SECRET;
    
    const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, NAVER_AD_SECRET);
    hmac.update(timestamp + '.' + method + '.' + api_url);
    const hash = hmac.finalize();
    hash.toString(CryptoJS.enc.Base64);

    let apiRequest = {};
    apiRequest.headers = {'X-Timestamp':timestamp, 'X-API-KEY': NAVER_AD_ACCESS, 
    'X-API-SECRET': NAVER_AD_SECRET, 'X-CUSTOMER': 275956, 'X-Signature': hash.toString(CryptoJS.enc.Base64)};
    apiRequest.method = 'get';
    apiRequest.url = '/naver/keywordstool';
    apiRequest.params = {
    hintKeywords: '맥북',
    showDetail: 1
    }

    const getColor = (compIdx) => {
        if(compIdx==='높음') return 'rgb(248, 166, 166)';
        if(compIdx==='중간') return 'rgb(139, 168, 249)';
        if(compIdx==='낮음') return 'rgb(242, 246, 152)';
    }

    const list = [];
    const getRelKwdStat = () =>{
        axios.request(apiRequest)
        .then(data => {
        const keywordList = data.data.keywordList;
        //console.log("keywordList",keywordList);
        keywordList.map(item => {
            return list.push(item); 
        });
        setKeyword(list);
        setLoading(false);
        })
        .catch((error) => {
        console.log("error", error);
        });
    }

    useEffect (()=>{
        getRelKwdStat();
    },[]);

    return (
    <Container>
        <Table stickyHeader aria-label="sticky table">
            <TableHead>
            <TableRow>
                <TableCell>No</TableCell>
                <TableCell>Keyword</TableCell>
                <TableCell>compIdx</TableCell>
            </TableRow>
            </TableHead>
            {loading ? (
            <CircularProgress />
            ):(
            <TableBody>
                {keyword.map((item,idx) => {
                const color = getColor(item.compIdx);
                return (
                    <TableRow key={idx} style={{background: `${color}`}}>
                    <TableCell>{idx+1}</TableCell>
                    <TableCell>{item.relKeyword}</TableCell>
                    <TableCell>{item.compIdx}</TableCell>
                    </TableRow>
                )
                })} 
            </TableBody>
            )}
        </Table>
    </Container>
    )
    }

export default NaverAPI;