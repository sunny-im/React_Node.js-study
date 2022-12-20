import React, {useEffect, useState} from 'react'

const Pagination = (viewTotalCount) => {
  const [totalPosts, setTotalPosts] = useState('');
  const [currentPage, setCurrentPage] = useState(1);    // 현재 페이지
  const [postsPerPage, setPostsPerPate] = useState(5); // 페이지당 표시할 게시물 수

  const indexOfLast = currentPage * postsPerPage;   // 현재 페이지의 마지막 게시물 인덱스 구하기 (현재페이지 * 페이지당 게시물 수)
  const indexOfFirst = indexOfLast - postsPerPage;  // 현재 페이지의 처음 게시물 인덱스 구하기 (현재 페이지의 마지막 인덱스 번호 - 페이지당 게시물 수)

  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);  // begin ~ end-1 번째 까지의 복사본을 새롭게 반환
    return currentPosts;
  }
  
  //=============================
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(Object.values(viewTotalCount) / postsPerPage); i++){
    pageNumbers.push(i);
  }

  const changePage = (page) => {
    setCurrentPage(page)
  }
  useEffect(()=>{
    console.log(pageNumbers)
  },[])

  //=============================
  return (
    <div>
      <ul style={{listStyle:'none', display:'flex'}}>
      {pageNumbers.map(page=>{
        return(
          <li key={page} style={{paddingRight:'15px'}}>
            <span onClick={()=>changePage(page)}>{page}</span>
          </li>
        )
      })}
      </ul>
    </div>
  )
}

export default Pagination




// 총 페이지 수
// 해당 페이지(클릭 한 페이지)의 첫 게시물 위치(index) : (페이지 번호 - 1) x 페이지당 표시할 게시물 수
