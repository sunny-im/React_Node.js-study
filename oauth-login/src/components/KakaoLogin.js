import React, {useState, useEffect} from 'react'
import axios from 'axios'

const KakaoLogin = () => {
  const [authorizeCode, setAuthorizeCode] = useState('');

  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY
  const REDIRECT_URI = "http://localhost:3000/kakao";

  //인가코드받기위한 url
  const authorizeURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  console.log("authorizeURL",authorizeURL)

  //주소창에 띄어진 인가코드 가져오기
  const getAuthorizeCode = () => {
    const uri = window.location.search;
    if(!uri) return;
    let getCode = uri.split('=')[1].split('&')[0];
    console.log("getCode",getCode)
    setAuthorizeCode(getCode);
}

  //토큰받기
  const token = () =>{
    axios.request({
      method:"POST",
      url : "https://kauth.kakao.com/oauth/token",
      params : {
        grant_type : "authorization_code",
        clint_id : REST_API_KEY,
        redirect_uri : REDIRECT_URI,
        code : authorizeCode
      }
    })
    .then(res=>console.log("res",res))
  }
  
  useEffect (()=>{
    getAuthorizeCode();
  })


  return (
    <div>
      <a href={authorizeURL} target="_blank">카카오 인가코드 받기</a>
      <div onClick={token}>토큰받기</div>
    </div>
  )
}

export default KakaoLogin