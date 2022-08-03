import React from 'react'
import { Row, Col } from 'react-bootstrap';

const ContactItem = ({item}) => {
  return (
    <div>
        <Row>
            <Col lg={3}>
                <img width={50} src="https://www.seekpng.com/png/detail/17-176376_person-free-download-and-person-icon-png.png" alt="" />
            </Col>
            <Col lg={9}>
                <div>{item.name}</div>
                <div>{item.phoneNumber}</div>
            </Col>
        </Row>
    </div>
  )
}

export default ContactItem  