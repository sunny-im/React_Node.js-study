import React, {useState, useEffect} from 'react'
import CryptoJS from 'crypto-js';
import axios from 'axios';

const NaverAPI = () => {
  const [campaignName, setCampaignName] = useState([]);
  const [campaignId, setCampaignId] = useState([]);

  const method = "GET";
  const timestamp = Date.now() + '';
  const NAVER_AD_ACCESS = process.env.REACT_APP_NAVER_AD_ACCESS;
  const NAVER_AD_SECRET = process.env.REACT_APP_NAVER_AD_SECRET;
  const api_url = "/ncc/campaigns";
  
  // signature 키 만들기  (참고:https://ukcasso.tistory.com/99)
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

  const nameList = [];
  const IdList = [];
  const getCampaigns = () =>{
      axios.request(apiRequest)
      .then(res => {
        console.log(res.data)
        const dataList = res.data;
        dataList.map(item=>{
          nameList.push(item.name);
          IdList.push(item.nccCampaignId)
        });
        setCampaignName(nameList);
        setCampaignId(IdList);
        console.log("campaignId",campaignId)
        console.log("campaignName",campaignName)
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
        <ul>
          <li></li>
        </ul>
      </div>
  )
  }

export default NaverAPI;