const axios = require('axios');
const CryptoJS = require('crypto-js');

const companyId = "";
const accessKey = ""; // access key id (from portal or Sub Account)
const secretKey = ""; // secret key (from portal or Sub Account)
const baseUrl = "https://workplace.apigw.ntruss.com";
const apigwPrimaryKey = "";

const space = " ";
const newLine = "\n";
const method = "GET";
const dfmId = "";
// 서식리스트
// const url = `/workflow/apigw/v2/company/${companyId}/dfm?status=all`;
// 서식 상세
const url = `/workflow/apigw/v2/company/${companyId}/fg/${dfmId}`;
const timestamp = new Date().getTime().toString();

//  HmacSHA256 
const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
hmac.update(method);
hmac.update(space);
hmac.update(url);
hmac.update(newLine);
hmac.update(timestamp);
hmac.update(newLine);
hmac.update(accessKey);
const hash = hmac.finalize();
const signature = hash.toString(CryptoJS.enc.Base64);

const header = {
  "Content-Type" : "application/json",
  "x-ncp-apigw-timestamp" : timestamp,
  "x-ncp-iam-access-key" : accessKey,
  "x-ncp-apigw-signature-v2" : signature
}

// 서식리스트 조회
// axios.get(`${baseUrl}${url}`, {headers : header})
// .then(res => {
//   console.log("res",res.data)
// })

// 서식 상세 조회 (연차 사용 계획)
axios.get(`${baseUrl}${url}`, {headers : header})
.then(res => {
  // console.log("res",res.data)
  console.log("attrItem",res.data.items)
  const item = res.data.items;
  item.map(attrItem => {
    console.log(attrItem);
    console.log("attrValue",attrItem.attrValue);
  })
})
