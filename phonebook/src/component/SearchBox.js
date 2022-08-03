import React, {useState} from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';


const SearchBox = () => {
    const [keyword, setKeyword] = useState("");
    const dispatch = useDispatch();
    const {contact} = useSelector((state)=>state);
    const searchName =(e)=>{
        e.preventDefault();
        dispatch({type:"SEARCH_NAME",payload:{keyword}})
    }
  return (
    <div>
        <Form onSubmit={searchName}>
            <Row>
                <Col lg={10}>
                    <Form.Control 
                        type="text" 
                        placeholder="검색할 이름을 입력하세요" 
                        onChange={(e)=>setKeyword(e.target.value)}    
                    />
                </Col>
                <Col lg={2}>
                    <Button type="submit">찾기</Button>
                </Col>
            </Row>
        </Form>
    </div>
  )
}

export default SearchBox