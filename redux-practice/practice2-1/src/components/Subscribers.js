import React from 'react'
import '../App.css';
import { connect } from 'react-redux'
import { addSubscriber } from '../redux/index';

const Subscribers = ({count, addSubscriber}) => {
  return (
    <div className="items">
      <h2>구독자 수 : {count}</h2>
      <button onClick={()=>addSubscriber()}>구독하기!</button>
    </div>
  )
}

// redux connect 검색, 공식문서 확인해보기
const mapStateToProps = ({subscribers}) => {
  // console.log(state,'state')
  return {
    count:subscribers.count
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
  addSubscriber
}

export default connect(mapStateToProps,mapDispatchToProps)(Subscribers)