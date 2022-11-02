import React, {useState, useEffect} from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios'
import qs from 'qs'

const NaverLogin = () => {
    const [newCode, setNewCode] = useState('');
    
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
    const CALLBACK_URL = "http://localhost:3000/login/oauth2/code/naver";
    //로그인 연동 URL
    const requestUrl = `naver/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=state&redirect_uri=${CALLBACK_URL}`
    //console.log(requestUrl)

    // code 가져오기
    const getNaverCode = () => {
        const uri = window.location.search;
        if(!uri) return;
        let getCode = uri.split('=')[1].split('&')[0];
        console.log(getCode)
        setNewCode(getCode);
    }
    //토큰 발급 
    const data = {
        grant_type : "authorization_code",
        client_id : CLIENT_ID,
        client_secret : CLIENT_SECRET,
        code : newCode
    }
    let accessToken = {
        headers: {
            "XGET" : "https://openapi.naver.com/v1/nid/me",
            "Authorization" : "Bearer AAAAPIuf0L+qfDkMABQ3IJ8heq2mlw71DojBj3oc2Z6OxMQESVSrtR0dbvsiQbPbP1/cxva23n7mQShtfK4pchdk/rc="
        },
        method: "POST",
        data: qs.stringify(data),
        url: "/oauth2.0/token"
    } 

    const naverLogin = async () => {
        const res = await axios(accessToken);
        console.log('res',res);
    }
    useEffect (()=>{
        getNaverCode();
    },[]);
    return (
    <div>
        <Container className="container">
            <div>
                <img src="./img/logo.png" alt="" />
            </div>
            <Form className="wrap">
                <Container className="inner_wrap">
                    <h2>로그인</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="email" placeholder="" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="로그인 상태 유지" />
                    </Form.Group>
                    <div className="btnGroup">
                        <Button className="btn_login" variant="warning" onClick={naverLogin}>
                            로그인 하기
                        </Button>
                        <Button className="btn_login naver" variant="warning">
                            <a href={requestUrl}>네이버로 로그인</a>
                        </Button>
                        <Button className="btn_login kakao" variant="warning" type="submit">
                            카카오로 로그인
                        </Button>
                    </div>
                </Container>
            </Form>
        </Container>
    </div>
    )
}

export default NaverLogin