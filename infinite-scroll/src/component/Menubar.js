import "../App.css"
import React from 'react'
import { Link } from 'react-router-dom'


const Menubar = () => {
  return (
    <div className='header'>
      <Link to="/a" className='nav_item'>infinite_a 예제</Link>
      <Link to="/b" className='nav_item'>infinite_b 예제</Link>
    </div>
  )
}

export default Menubar