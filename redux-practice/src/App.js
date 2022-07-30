import './App.css';
import { useState } from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import Box from './component/Box'

function App() {
  // useSelector는 매개변수가 함수! store에 있는 count를 가지고 온다!
  const count = useSelector(state=>state.count);
  let id = useSelector(state => state.id);
  let password = useSelector(state => state.password);
  let count2 = useSelector(state=>state.count2)
  const dispatch = useDispatch();

  const counter = () => {
    // type: action의 이름 , payload 함수에서 매개변수 느낌.. 필요한 정보 보내기?
    dispatch({type:"INCREMENT", payload:{num:5}});
  }
  const counter2 = () => {
    dispatch({type:"DECREMENT", payload:{num:2}});
  }

  const login = ()=> {
    dispatch({type:"LOGIN", payload:{id:"sunny", password:"123"}})
  }
  return (
    <div>
      <div>
        <h1>{id},{password}</h1>
        <div>{count}</div>
        <button onClick={counter}>증가</button>
        <div>{count2}</div>
        <button onClick={counter2}>감소</button>
        <button onClick={login}>로그인</button>
        <Box />
      </div>
    </div>
  );
}

export default App;
