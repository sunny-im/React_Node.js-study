import React from 'react'
import { Link } from 'react-router-dom'

const Menubar = () => {
  return (
    <div>
        <div className="header">
            <Link to="/" className='nav_item'>Home</Link>
            <Link to="/news" className='nav_item'>News</Link>
        </div> 
    </div>
  )
}

export default Menubar