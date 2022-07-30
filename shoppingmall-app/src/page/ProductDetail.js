import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import {Container, Row, Col, Button, Dropdown} from 'react-bootstrap';

const ProductDetail = () => {
    const [product, setProduct] =useState('');
    let{id} = useParams();
    const getProductDetail = async ()=>{
        let url=`http://localhost:4000/products/${id}`
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setProduct(data);
    }
    useEffect(()=>{
        getProductDetail()
    },[]);
  return (
    <div>
        <Container>
            <Row>
                <Col className="productImg">
                    <img src={product.img} alt="" />
                </Col>
                <Col className='detail'>
                    <div>{product.title}</div>
                    <div>{product.price}원</div>
                    <div>{product.choice==true?"Conscious Choice":""}</div>
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                        사이즈 선택
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {product && product.size.map((item)=>(
                                <Dropdown.Item>{item}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                        </Dropdown>
                    <Button variant="dark">추가</Button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ProductDetail