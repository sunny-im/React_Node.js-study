import React from 'react'
import {Button, Form, Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

const Login = ({setAuthenticate}) => {
    const navigate = useNavigate();
    const loginUser=(e)=>{
        e.preventDefault();
        console.log("login user function")
        setAuthenticate(true);
        navigate('/');
    }
  return (
    <div>
        <Container>
            <Form onSubmit={(e)=>loginUser(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="warning" type="submit">
                    로그인
                </Button>
            </Form>
        </Container>    
    </div>
  )
}

export default Login