import React,{useEffect, useState} from 'react'
import axios from 'axios';

const Infinite_a = () => {
  const [randomData, setRandomData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [update, setUpdate] = useState(false); //추가 데이터를 가져오는 중인지 확인하는 역할
  const [myData, setMyData] = useState([]); // api로부터 받아온 데이터

  const createRandomData = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>setRandomData(res.data));
  };

  createRandomData();

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    //페이지 끝에 도달하고 update가 진행되지 않는 상태일때 때 동장
    if(update === false && scrollTop + clientHeight >= scrollHeight){
      updateMoreData();
    }
  };

  // scroll event listener 등록 및 해제
  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  },[])
  const updateMoreData = async () => {
    // 추가 데이터 update 하는 상태로 전환
    setUpdate(true);
    if(pageCount >= randomData.length){
      return;
    }
    const updateData = randomData[pageCount];
    const mergeData = myData.concat(updateData);
  
    setMyData(mergeData);
    setPageCount(pageCount+1);
  
    setUpdate(false);
  };
  return (
    <div>
      {randomData.map((data,i)=>{
        return (
          <div key={i}>
            <h2>기존</h2>
            <div>{data.id}</div>
            <div>{data.title}</div>
            <div>{data.body}</div>
          </div>
        )
      })}
      {myData.map((newData,i)=>{
        return (
          <div key={i}>
            <h2>업데이트</h2>
            <div>{newData.id}</div>
            <div>{newData.title}</div>
            <div>{newData.body}</div>
          </div>
        )
      })}
    </div>
  );
}
export default Infinite_a