import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className='home_container'>
            <h1 className="title">Let's look up the News!!!</h1>
            <div>
                <Link to="/news" className='nav_item'>
                    <img src="/img/lets-go.png" alt="" />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home