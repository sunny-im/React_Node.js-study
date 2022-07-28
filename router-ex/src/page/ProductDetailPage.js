import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {
    const {id} = useParams();
    console.log("params",{id}) // url이 '~~~/products/234' 라면 파라미터 가져오기
  return (
    <div>
        <h1>ProductDetailPage!! {id}</h1>
    </div>
  )
}

export default ProductDetailPage