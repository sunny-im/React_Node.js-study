import React, {useEffect, useState} from "react";
import './App.css';
import Home from './components/Home';
import Menubar from './components/Menubar';
import News from './components/News';
import NaverAPI from './components/NaverAPI';
import Starbucks from './components/Starbucks';
import NaverAd from './components/NaverAd';
import { Routes, Route } from 'react-router-dom';
import Test from './components/Test'

function App() {
  const [searchData, setSearchData] = useState([]);

  //입력한 검색어로 크롤링하는 버전
  const getData = (keyword) => {
    console.log("검색 키워드 : " + keyword);
    fetch(`/starbucks?keyword=${keyword}`)
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
        <Route path="/naverAd" element={<NaverAd/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes> 
    </div>
  );
}

export default App;
