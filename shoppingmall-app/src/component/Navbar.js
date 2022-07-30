import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = ({authenticate}) => {
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'Home', 'Sale', '지속가능성']
  // 3.로그인버튼을 누르면 로그인 페이지
  const navigate = useNavigate();
  const goToLogin=()=>{
    navigate('/login');
  }
  const goToHompage=()=>{
    navigate('/');
  }
  const search = (e) =>{
    if (e.key === "Enter"){
      // 입력한 검색어를 읽어와서
      let keyword = e.target.value;
      console.log(keyword)
      // url을 바꿔준다
      navigate(`/?q=${keyword}`)
    }
  };
  return (
    <div>
        <div className='loginBtn'  onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate==true?"로그인":"로그아웃"}</div>
        </div>
        <div className='navBar'>
          <img className="logo" src="/img/logo.png" alt="로고" onClick={goToHompage}/>
        </div>
        <div className='menuArea'>
          <ul className='menuList'>
            {menuList.map((menu,idx)=> 
              <li key={idx}>{menu}</li>
            )}
          </ul>
          <div className='search'>
            <FontAwesomeIcon icon={faSearch} />
            {/* 9. 엔터를 누르면 검색하기 */}
            <input type="text" placeholder='제품검색' onKeyPress={(e)=>search(e)}/>
          </div>
        </div>
    </div>
  )
}

export default Navbar