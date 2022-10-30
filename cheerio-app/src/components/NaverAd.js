import React, {useState, useEffect} from 'react'
import CryptoJS from 'crypto-js';
import axios from 'axios';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, CircularProgress  } from '@material-ui/core';

const NaverAPI = () => {
    const[keyword, setKeyword] = useState([]);
    const[loading, setLoading] = useState(true);
    const method = "GET";
    const api_url = "/ncc/campaigns";
    const timestamp = Date.now() + '';
    const NAVER_AD_ACCESS = process.env.REACT_APP_NAVER_AD_ACCESS;
    const NAVER_AD_SECRET = process.env.REACT_APP_NAVER_AD_SECRET;
    
    const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, NAVER_AD_SECRET);
    hmac.update(timestamp + '.' + method + '.' + api_url);
    const hash = hmac.finalize();
    hash.toString(CryptoJS.enc.Base64);

    let apiRequest = {};
    apiRequest.headers = {
      'X-Timestamp':timestamp, 
      'X-API-KEY': NAVER_AD_ACCESS, 
      'X-CUSTOMER': 275956, 
      'X-Signature': hash.toString(CryptoJS.enc.Base64)};
    apiRequest.method = 'get';
    apiRequest.url = '/naver/ncc/campaigns';

    const list = [];
    const getCampaigns = () =>{
        axios.request(apiRequest)
        .then(res => {
        console.log(res)
        })
        .catch((error) => {
        console.log("error", error);
        });
    }

    useEffect (()=>{
      getCampaigns();
    },[]);

    return (
        <div>

        </div>
    )
    }

export default NaverAPI;