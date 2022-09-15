import React from 'react'
import { Container, Form, Button } from 'react-bootstrap';

const NaverLogin = () => {
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
                        <Button className="btn_login" variant="warning" type="submit">
                            로그인 하기
                        </Button>
                        <Button className="btn_login naver" variant="warning" type="submit">
                            네이버로 로그인
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