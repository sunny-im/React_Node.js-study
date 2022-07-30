import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
    // 4-2. 상품을 누르면 상세페이지로 넘어간다!!
    const navigate = useNavigate();
    const showDetail=()=>{
        navigate(`/product/${item.id}`)
    }
  return (
    <div className='card' onClick={showDetail}>
        <img src={item?.img} alt="" />
        <div>{item?.choice==true?"Conscious Choice":""}</div>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>{item?.new==true?"신제품":""}</div>
    </div>
  )
}

export default ProductCard