import React, {useState} from 'react'
import {Button, Form, Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { authenticateAction } from '../redux/actions/authenciateAction';

const Login = ({setAuthenticate}) => {
    const [id,setId] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginUser=(e)=>{
        e.preventDefault();
        console.log("login user function")
        //setAuthenticate(true);
        dispatch(authenticateAction.login(id,password));
        navigate('/');
    }
  return (
    <div>
        <Container>
            <Form onSubmit={(e)=>loginUser(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setId(e.target.value)}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
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