import React, {useState, useEffect} from 'react'
import CryptoJS from 'crypto-js';
import axios from 'axios';
import {Grid,Container,Paper,TableContainer,Table,TableHead,TableRow,TableBody,TableCell} from '@material-ui/core';
import { Tab } from 'bootstrap';

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
    .then(res => {
      setAdListGroup(res.data)
      console.log("adGroup",res.data)
    })
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
    .then(res=>{
      setKeywordList(res.data) 
      console.log("keyword",res.data)})
    .catch((err)=>console.log("err",err))
  }

  useEffect (()=>{
    getCampaigns();
  },[]);

  return (
    <Container container spacing={2}>
      <Grid item xs={6}>
        <Table component={Paper}>
          <TableHead>
            <TableRow>
              <TableCell align="center">캠페인 이름</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {campaignList.map((campaign,idx)=>{
              return (
              <TableRow>
                <TableCell align="center" component="th" key={idx} onClick={()=>getAdGroup(campaign.nccCampaignId)} style={{color:"blue"}}>
                  {campaign.name}
                  {seletedCampaignId === campaign.nccCampaignId && (
                    <Table>
                      {adGroupList.map((adGroup,idx)=>{
                        return (
                          <TableRow>
                            <TableCell align="center" component="td" key={idx} onClick={()=>getKeyword(adGroup.nccAdgroupId)} style={{color:"red"}}>
                              {adGroup.name}
                              {seletedAdgroupId === adGroup.nccAdgroupId && (
                                <Grid item xs={6}>
                                <Table>
                                  {keywordList.map((keyword,idx)=>{
                                    return (
                                      <TableRow>
                                        <TableCell align="center" component="td" key={idx} style={{color:"gold"}}>{keyword.keyword}

                                        </TableCell>
                                      </TableRow>
                                    )
                                  })}
                                </Table>
                                </Grid>
                              )}
                            </TableCell>
                          </TableRow>
                        )
                      })}
                    </Table>
                  )}
                </TableCell>
              </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Grid>
      {/* {adGroupList.map((adGroup,idx)=>{
      {seletedAdgroupId === adGroup.nccAdgroupId && (
      <Grid item xs={6}>
        <Table component={Paper}>
          <TableHead>
            <TableRow>
              <TableCell>{adGroup.nccAdgroupId}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {keywordList.map((keyword,idx)=>{
            return (
              <TableRow>
                <TableCell align="center" component="td" key={idx} style={{color:"gold"}}>{keyword.keyword}

                </TableCell>
              </TableRow>
            )
          })}
          </TableBody>
        </Table>
      </Grid>
      )}
        })} */}
    </Container>
  )
  }

export default NaverAd;