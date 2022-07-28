import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
    const navigate = useNavigate();
    const goProductPage=()=>{
        navigate('/products?q=pants');
    }
  return (
    <div>
        <h1>Homepage</h1>
        {/* 페이지 이동 방법 1 : Link */}
        <Link to="/about">About 페이지로 이동!</Link>
        {/* 페이지 이동 방법 2 : navigate hook 사용 */}
        <button onClick={goProductPage}>Product 페이지로 이동</button>
    </div>
  )
}

export default Homepage