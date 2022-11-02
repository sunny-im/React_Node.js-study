import React from 'react'

const KakaoLogin = () => {

  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY
  const REDIRECT_URI = "http://localhost:3000/kakao"

  const authorizeURL = `kakao/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div>
      <a href={authorizeURL}>카카오 인가코드 받기</a>

    </div>
  )
}

export default KakaoLogin