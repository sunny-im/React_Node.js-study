import {useState} from 'react';
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
  return (
    <>
      <div className='main'>
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
