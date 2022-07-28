import React from 'react'
import { useNavigate } from 'react-router-dom'

const Aboutpage = () => {
    const navigate = useNavigate();

    const goToHompage = ()=>{
        navigate('/');  // 이동할 주소 작성!
    }
  return (
    <div>
        <h1>Aboutpage</h1>
        <button onClick={goToHompage}>Hompage로 이동!</button>
    </div>
  )
}

export default Aboutpage