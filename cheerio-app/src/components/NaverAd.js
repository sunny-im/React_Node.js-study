import React, {useState, useEffect} from 'react'
import CryptoJS from 'crypto-js';
import axios from 'axios';
import {Grid,Container,Paper,Table,TableHead,TableRow,TableBody,TableCell} from '@material-ui/core';
import NaverKeyword from './NaverKeyword'

const NaverAd = () => {
  const [campaignList, setCampaignList] = useState([]);
  const [adGroupList, setAdGroupList] = useState([]);
  const [keywordList, setKeywordList] = useState([]);
  const [keywordIdList, setKeywordIdList] = useState([]);
  const [statList, setStatList] = useState([]);
  const [seletedCampaignId, setSeletedCampaignId] = useState(false);
  const [seletedAdgroupName, setSeletedAdgroupName] = useState(false);

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
      'X-CUSTOMER': 274933, 
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
    .then(res => {
      setCampaignList(res.data)
      //console.log("campaign",campaignList)
    })
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
    .then(res =>{
      setAdGroupList(res.data)
      // console.log("adGroup",adGroupList)
    })
    .catch((error) => {
      console.log("error", error);
    });
  }

  let keywordId=[];
  const getKeyword = (adGroupId,adGroupName,keywordId)=> {
    setSeletedAdgroupName(adGroupName);
    axios.request({
      method : 'get',
      headers : getHeaders('/ncc/keywords'),
      url : `/naver/ncc/keywords?nccAdgroupId=${adGroupId}`
    })
    .then(res=>{
      setKeywordList(res.data)
      keywordList.forEach(list=>{
        keywordId.push(list.nccKeywordId)
        setKeywordIdList(keywordId)
      })
      console.log("keywordList",keywordList)
      // console.log("keywordId",keywordIdList)
    })
    .catch((err)=>console.log("err",err))
  }

  const getStats = () => {
    axios.request({
      method : 'get',
      headers : getHeaders('/stats'),
      url : `/naver/stats`,
      params : {
        id : keywordIdList.join(","),
        fields : JSON.stringify(["clkCnt","impCnt","salesAmt", "ctr", "cpc", "avgRnk", "ccnt"]),
        datePreset : "yesterday"
      }
    })
    .then(res=>{
      console.log("res.data.data",res.data.data)
      setStatList(res.data.data[0])
      console.log("statList",statList)
    })
    .catch((err)=>console.log("err",err))
  }

  useEffect (()=>{
    getCampaigns();
  },[]);

  return (
    <Container>
      <Grid  container spacing={2}>
        <Grid item xs={4}>
          <Table component={Paper}>
            <TableHead>
              <TableRow>
                <TableCell align="left" style={{fontWeight:"bold", fontSize:"18px"}}>캠페인 이름</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {campaignList.map((campaign,idx)=>{
                return (
                <TableRow>
                  <TableCell align="left" key={idx} onClick={()=>getAdGroup(campaign.nccCampaignId)} style={{color:"blue"}}>
                    {campaign.name}
                    {seletedCampaignId === campaign.nccCampaignId && (
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell align="center" style={{fontWeight:"bold", fontSize:"18px"}}>광고그룹</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {adGroupList.map((adGroup,idx)=>{
                            return (
                              <TableRow>
                                <TableCell align="center" key={idx} onClick={()=>{getKeyword(adGroup.nccAdgroupId,adGroup.name,keywordId);getStats()}} 
                                style={{color:"red"}}>
                                  {adGroup.name}
                                </TableCell>
                              </TableRow>
                            )
                          })}
                        </TableBody>
                      </Table>
                    )}
                  </TableCell>
                </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Grid>
        {seletedAdgroupName&&(
        <Grid item xs={8}>
          <NaverKeyword
            keywordList={keywordList}
            seletedAdgroupName={seletedAdgroupName}
            setStatList={setStatList}
            statList={statList}
            keywordIdList={keywordIdList}
          />
        </Grid>
        )}
      </Grid>
    </Container>
  )
}

export default NaverAd