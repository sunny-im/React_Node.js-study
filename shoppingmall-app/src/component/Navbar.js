import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'Home', 'Sale', '지속가능성']
  return (
    <div>
        <div className='loginBtn'>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
        <div className='navBar'>
          <img className="logo" src="/img/logo.png" alt="로고" />
        </div>
        <div className='menuArea'>
          <ul className='menuList'>
            {menuList.map((menu)=> 
              <li>{menu}</li>
            )}
          </ul>
          <div className='search'>
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder='제품검색'/>
          </div>
        </div>
    </div>
  )
}

export default Navbar