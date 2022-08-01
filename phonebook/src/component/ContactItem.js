import React from 'react'
import { Row, Col } from 'react-bootstrap';

const ContactItem = () => {
  return (
    <div>
        <Row>
            <Col lg={3}>
                <img width={50} src="https://www.seekpng.com/png/detail/17-176376_person-free-download-and-person-icon-png.png" alt="" />
            </Col>
            <Col lg={9}>
                <div>써니</div>
                <div>01012312352</div>
            </Col>
        </Row>
    </div>
  )
}

export default ContactItem 