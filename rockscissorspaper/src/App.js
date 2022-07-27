import {useState, useEffect} from 'react';
import './App.css';
import Box from './component/Box'

// 1. 박스 2개..(타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼
// 3. 버튼 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택
// 5. 3,4의 결과를 가지고 누가 이겼는지 승패 
// 6. 승패 결과에 따라 테두리 색 변경(이기면:초록, 지면:빨강, 비기면:검정)

const choice = {
  rock : {
    name : "Rock",
    img : "https://i.pinimg.com/originals/97/24/76/9724768819d2965b45ae991c8fae4473.png"
  },
  scissors : {
    name : "Scissors",
    img : "https://munguland.com/web/product/big/201812/6c93ffb78958a5bf9dad8187907a58da.jpg"
  },
  paper : {
    name : "Paper",
    img : "https://static-01.daraz.lk/p/26358f015f1838b541f02207c4215908.jpg"
  }
}
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
    console.log("user",user)
    console.log("computer",computer)

    if(user.name == computer.name) {
      return "TIE"
    } else if (user.name == "Rock")return computer.name=="Scissors"?"WIN":"LOSE"
    else if (user.name == "Scissors")return computer.name=="Paper"?"WIN":"LOSE"
    else if (user.name == "Paper")return computer.name=="Rock"?"WIN":"LOSE"
  };

  const randomChoice = () => {
    // 객체에 키 값만 가져와서 배열로 만들어준다 !
    let itemArray = Object.keys(choice);
    console.log('itemArray',itemArray);
    let randomItem = Math.floor(Math.random()*itemArray.length);
    console.log('randomItem',randomItem)
    let final = itemArray[randomItem]
    console.log('final',final);
    return choice[final];
  };

  // useEffect는 
  /*
  1. 매개변수로 콜백함수와 배열을 받는다.
  2. 기본적으로 앱 실행 후 첫번째 렌더 후에 한번 실행이된다.
  3. 여기에선 주로 화면에 처음 보여줘야 할 데이터들에 대한 api호출을 한다.
  */
  useEffect(()=>{
    console.log("2.useEffect - 클래스형 컴포넌트의 componentDidMount를 커버한다 ! ");
  },[]);

  useEffect(()=>{
    console.log("4.useEffect - 클래스형 컴포넌트의 componentDidUpdate를 커버한다 ! 배열안에 state값을 넣으면 업데이트가 된 새로운 값 확인가능 !!!", userSelect, result);
    // 배열안에 여러개의 state를 구독하고 있다면 배열 안의 state중 하나라도 업데이트가 되면 해당 useEffect가 호출이 된다. 하지만 여러개의 state가 동시에 업데이트 되었다 해도 한 번만 호출된다 !
  },[userSelect,result]);

  return (
    <>
      <div className='main'>
        {console.log("1/3.render")}
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/> 
      </div>
     
      <div className='main'>
        <button onClick={()=>play("scissors")}>가위</button>
        <button onClick={()=>play("rock")}>바위</button>
        <button onClick={()=>play("paper")}>보</button>
      </div>
    </>
  );
}

export default App;
