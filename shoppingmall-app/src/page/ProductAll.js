import React from 'react'
import { useState,useEffect } from 'react'
import ProductCard from '../component/ProductCard';
import {Container, Row, Col} from 'react-bootstrap';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const getProducts = async ()=>{
        // 2.전체상품페이지 - 전체상품을 볼 수 있다. (json-server 사용)
        let url='http://localhost:4000/products'
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setProductList(data);
    }
    useEffect(()=>{
        getProducts()
    },[]);
  return (
    <div>
        <Container>
            <Row>
                {productList.map((menu) => (
                    <Col lg={3}>
                        <ProductCard item={menu}/>
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
  )
}

export default ProductAll