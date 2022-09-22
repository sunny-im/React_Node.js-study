import React, {useEffect, useState} from "react";
import './App.css';
import Home from './components/Home';
import Menubar from './components/Menubar';
import News from './components/News';
import NaverAPI from './components/NaverAPI';
import Starbucks from './components/Starbucks';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [searchData, setSearchData] = useState([]);

  // 검색어를 역삼으로 두고 크롤링 한 버전
  const getData = () => {
    fetch(`/starbucks`)
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      console.log("서버에서 puppeteer로 가져온 데이터 : ",data);
      setSearchData(data);
    })
  }

  useEffect(()=>{
    getData();
  },[])
  return (
    <div>
      <Menubar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/naverapi" element={<NaverAPI/>}/>
        <Route path="/starbucks" element={<Starbucks searchData={searchData} getData={getData}/>}/>
      </Routes> 
    </div>
  );
}

export default App;
