import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menubar = () => {
  return (
    <div>
    <Navbar>
        <Container className="header">
            <Link to="/" className='nav_item'>Home</Link>
            <Link to="/news" className='nav_item'>News</Link>
        </Container> 
    </Navbar>
    </div>
  )
}

export default Menubar