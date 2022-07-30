import React from 'react'
import { useState,useEffect } from 'react'
import ProductCard from '../component/ProductCard';
import {Container, Row, Col} from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();
    const getProducts = async ()=>{
        // 9-1. 검색 (json-server에서 q로 search하는게 포함되어 있음!)
        let searchQuery = query.get('q') || "";
        console.log("쿼리값은?", searchQuery);
        // 2.전체상품페이지 - 전체상품을 볼 수 있다. (json-server 사용)
        let url=`https://my-json-server.typicode.com/sunny-im/shoppingmall-app/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setProductList(data);
    }
    useEffect(()=>{
        getProducts()
    },[query]); // 쿼리값이 바뀔때마다 getProducts()를 호출해야 하므로!
  return (
    <div>
        <Container>
            <Row>
                {productList.map((menu, idx) => (
                    <Col lg={3} key={idx}>
                        <ProductCard item={menu}/>
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
  )
}

export default ProductAll