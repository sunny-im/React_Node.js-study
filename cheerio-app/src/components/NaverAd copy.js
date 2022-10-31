import React, {useState, useEffect} from 'react'
import CryptoJS from 'crypto-js';
import axios from 'axios';
import {Grid} from '@material-ui/core';

const NaverAd = () => {
  const [campaignList, setCampaignList] = useState([]);
  const [adGroupList, setAdListGroup] = useState([]);
  const [keywordList, setKeywordList] = useState([]);
  const [seletedCampaignId, setSeletedCampaignId] = useState(false);
  const [seletedAdgroupId, setSeletedAdgroupId] = useState(false);

  const method = "GET";
  const NAVER_AD_ACCESS = process.env.REACT_APP_NAVER_AD_ACCESS;
  const NAVER_AD_SECRET = process.env.REACT_APP_NAVER_AD_SECRET;
  
  // signature 키 만들기  (참고:https://ukcasso.tistory.com/99)
  const getHeaders = (api_url) => {
    let timestamp = Date.now() + '';
    let hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, NAVER_AD_SECRET);
    hmac.update(timestamp + '.' + method + '.' + api_url);
    let hash = hmac.finalize();
    hash.toString(CryptoJS.enc.Base64);  

    let header = {
      'X-Timestamp':timestamp, 
      'X-API-KEY': NAVER_AD_ACCESS, 
      'X-CUSTOMER': 275956, 
      'X-Signature': hash.toString(CryptoJS.enc.Base64)
    }
    return header;
  }
  
  const getCampaigns = () =>{
    axios.request({
      method : "get",
      headers : getHeaders('/ncc/campaigns'),
      url : '/naver/ncc/campaigns'
    })
    .then(res => setCampaignList(res.data))
    .catch((error) => {
    console.log("error", error);
    })
  }

  const getAdGroup = (campaignId) => {
    setSeletedCampaignId(campaignId);
    axios.request({
      method : 'get',
      headers : getHeaders('/ncc/adgroups'),
      url : `/naver/ncc/adgroups?nccCampaignId=${campaignId}`,
    })
    .then(res => setAdListGroup(res.data))
    .catch((error) => {
      console.log("error", error);
    });
  }

  const getKeyword = (adGroupId)=> {
    setSeletedAdgroupId(adGroupId);
    axios.request({
      method : 'get',
      headers : getHeaders('/ncc/keywords'),
      url : `/naver/ncc/keywords?nccAdgroupId=${adGroupId}`
    })
    .then(res=>setKeywordList(res.data))
    .catch((err)=>console.log("err",err))
  }

  useEffect (()=>{
    getCampaigns();
  },[]);

  return (
    <div>
      <Grid container spacing={2}>
          <ul>
            {campaignList.map((campaign,idx) => {
              return (
                <li key={idx} onClick={()=>getAdGroup(campaign.nccCampaignId)}>
                  {campaign.name}
                  {seletedCampaignId === campaign.nccCampaignId && (
                    <ul>
                      {adGroupList.map((adGroup,idx)=>{
                        return(
                          <li key={idx} onClick={()=>getKeyword(adGroup.nccAdgroupId)}>{adGroup.name}
                            <Grid item xs={12}>
                            {seletedAdgroupId === adGroup.nccAdgroupId && (
                              <ul>
                                {keywordList.map((keyword,idx)=>{
                                  return(
                                    <li key={idx}>{keyword.keyword}</li>
                                  );
                                })}
                              </ul>
                            )}
                            </Grid>
                          </li>
                        );
                      })}
                    </ul>              
                  )}
                </li>
              );
            })}
          </ul>
      </Grid>
    </div>
  )
  }

export default NaverAd;