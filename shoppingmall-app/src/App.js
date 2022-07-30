import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import Navbar from './component/Navbar';



// 3.로그인버튼을 누르면 로그인 페이지
// 4.상품을 눌럿을 때 로그인이 안되어있으면 로그인페이지가 나오고
// 5.로그인이 되어있어야 상품상세페이지에 들어갈 수 있다.
// 6.로그아웃 버튼은 누르면 로그아웃이 된다.
// 7.상품상세페이지에서 로그아웃을 누르면 상품상세페이지를 볼 수 없으므로 바로 로그인 페이지로 이동된다.
// 8.로그인/로그아웃 버튼 변경
// 9.상품 검색
function App() {
  return (
    <div>
      {/* 1-1. 네비게이션 바 (항상 그대로 유지) */}
      <Navbar />
      {/* 1.전체상품 / 로그인 / 상품상세페이지 총 3개 */}
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
