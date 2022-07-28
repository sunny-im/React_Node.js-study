import React from 'react'
import { useSearchParams } from 'react-router-dom'

const ProductPage = () => {
    let [query, setQuery] = useSearchParams();
    console.log("query",query.get('q')); // url이 '~~~/products?q=ddd' 라면 쿼리 q 값 가져오기..
  return (
    <div>
        <h1>Show All Products!!</h1>
    </div>
  )
}

export default ProductPage