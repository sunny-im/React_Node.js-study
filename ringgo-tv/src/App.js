import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';

//1. 홈페이지, 영화페이지, 영화 상세페이지 필요
//2-1. 홈페이지 배너
//2-2. 3가지 섹션의 영화 (인기영화, 상위영화, 개봉영화)
//2-3. 영화 마우스오버시 영화의 제목, 장르, 평점, 인기도, 관람등급 표시
//2-4. 영화 슬라이드로 넘길 수 있음

//3-1. 영화 상세 페이지 > 포스터, 제목, 줄거리,평점,인기도,청불여부,예산,이익,러닝타임 등등
//3-2. trailer를 누르면 예고편(유투브)
//3-3. 영화 리뷰
//3-4. 관련된 영화들

//4-1.영화검색 > 영화정렬
//4-2.영화 필터링

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:id" element={<MovieDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
