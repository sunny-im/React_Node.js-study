import axios from 'axios';
import React,{useState, useEffect, useCallback} from 'react'
// react-intersection-observer 라이브러리 사용
import { useInView } from "react-intersection-observer"

const Infinite_b = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // ref를 div에 걸어주면 해당요소가 보이면 inView가 true, 안보이면 false로 자동변경된다
  const [ref, inView] = useInView();

  // 서버에서 아이템을 가지고 오는 함수
  const getItems = useCallback(async () => {
    setLoading(true);
    await axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      setItems(prevState => [...prevState, res.data])
    })
    setLoading(false);
  },[page])

  // getItem이 바뀔때마다 함수 실행
  useEffect(()=>{
    getItems()
  },[getItems])

  useEffect(()=>{
    // 사용자가 마지막 요소를 보고있고, 로딩중이 아니라면
    if(inView && !loading) {
      setPage(prevState => prevState + 1)
    }
  },[inView, loading])

  return (
    <div>
      {items.map((data,i) => {
        console.log("data",data)
        return (
          <div key={i}>
            {data.length - 1 == i ? (
              <div ref={ref}>
                {data.body}
              </div>
            ) : (
              <div>
                {data.body}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Infinite_b