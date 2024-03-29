import React, {useEffect, useState} from "react";
import SearchForm from "./components/SearchForm";
import SearchList from "./components/SearchList";
import axios from "axios";

function App() {
  const [searchData, setSearchData] = useState([]);

  const getData = (keyword) => {
    console.log("검색 키워드 : " + keyword);
    // axios.get(`api/data?keyword=${keyword}`)
    // .then((data) => {
    //   console.log(data);
    // })
    fetch(`api/data?keyword=${keyword}`)
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
    <div className="App">
      <SearchForm getData={getData} />
      <SearchList searchData={searchData}/>
    </div>
  );
}

export default App;