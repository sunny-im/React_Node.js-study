import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';


const SearchBox = () => {
  return (
    <div>
        <Row>
            <Col lg={10}>
                <Form.Control type="text" placeholder="검색할 이름을 입력하세요" />
            </Col>
            <Col lg={2}>
                <Button>찾기</Button>
            </Col>
        </Row>
    </div>
  )
}

export default SearchBox