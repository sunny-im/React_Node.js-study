import React from 'react'
import { Link } from 'react-router-dom'

const Menubar = () => {
  return (
    <div>
        <div className="header">
            <Link to="/" className='nav_item'>Home</Link>
            <Link to="/news" className='nav_item'>News</Link>
            <Link to="/naverapi" className='nav_item'>NaverAPI</Link>
            <Link to="/starbucks" className='nav_item'>Starbucks</Link>
            <Link to="/naverAd" className='nav_item'>NaverAd</Link>
            <Link to="/test" className='nav_item'>Test</Link>
        </div> 
    </div>
  )
}

export default Menubar