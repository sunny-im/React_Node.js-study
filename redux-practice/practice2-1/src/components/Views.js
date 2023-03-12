import React,{useState} from 'react'
import '../App.css';
import { connect } from 'react-redux'
import { addView } from '../redux';

const Views = ({count, addView}) => {
  const [number, setNumber] = useState(1);
  return (
    <div className="items">
      <h2>구독자 수 : {count}</h2>
      <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}/>
      <button onClick={()=>addView(number)}>구독하기!</button>
    </div>
  )
}

// redux connect 검색, 공식문서 확인해보기
const mapStateToProps = ({views}) => {
  // console.log(state,'state')
  return {
    count:views.count
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addSubscriber: ()=>dispatch(addSubscriber())
//   }
// }
const mapDispatchToProps = {
  // addSubscriber 라는 프로퍼티 안에 addSubscriber를 매핑  ( addSubscriber : addSubscriber)
  // ES6에서는 프로퍼티와 값이 일치하면 생략가능
  addView : (number)=>addView(number)
}

export default connect(mapStateToProps,mapDispatchToProps)(Views)