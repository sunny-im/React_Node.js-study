import React from 'react'
import { useState,useEffect } from 'react'
import ProductCard from '../component/ProductCard';
import {Container, Row, Col} from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import {productAction} from "../redux/actions/productAction"
import {useDispatch, useSelector} from "react-redux"

const ProductAll = () => {
    //const [productList, setProductList] = useState([]);
    // reducer들을 객체로 combine했기 때문에 어떤 reducer에서 가져오는지 명시해준다.
    const productList = useSelector(state => state.product.productList);
    const [query, setQuery] = useSearchParams();
    const dispatch = useDispatch();
    const getProducts = ()=>{
        // 9-1. 검색 (json-server에서 q로 search하는게 포함되어 있음!)
        let searchQuery = query.get('q') || "";
        console.log("쿼리값은?", searchQuery);
        // 2.전체상품페이지 - 전체상품을 볼 수 있다. (json-server 사용)
        // let url=`http://localhost:4000/products?q=${searchQuery}`;
        // let response = await fetch(url);
        // let data = await response.json();
        // console.log(data);
        // setProductList(data);  
        // 위 내용을 미들웨어로 보냈다 !
        dispatch(productAction.getProducts(searchQuery));
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