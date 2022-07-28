import { useState } from 'react'; 
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from './page/Homepage'
import Aboutpage from './page/Aboutpage'
import ProductPage from './page/ProductPage'
import ProductDetailPage from './page/ProductDetailPage'
import LoginPage from './page/LoginPage';
import UserPage from './page/UserPage';

function App() {
  const [authenticate, setAuthenticate] = useState(false); // true: 로그인 된 상황
  // 컴포넌트임!!
  const PrivateRoute =()=> {
    // 여기 있는 Navigate는 Hook(useNavigate)이 아닌 컴포넌트. redirect를 도와줌
    // 즉, 로그인이 안된 상태면 login 페이지로 Redirect!! 
    return authenticate == true? <UserPage/> : <Navigate to="/login"/>
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/products" element={<ProductPage />} />
        {/* Restful Route design pattern */}
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* userPage는 로그인 해야만 볼 수 있으므로.. 바로 UserPage로 가는게 아닌 PrivateRoute로 */}
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
