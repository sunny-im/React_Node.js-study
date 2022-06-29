import React, {useState} from 'react';

const Name =() => {
        //[현재 상태 값 저장 변수, 상태 값을 갱신해주는 Setter 함수] = useState("초기값->생략가능");
    const [myName, setMyName]  = useState("sunny")
    function changeName(e) {
        e.preventDefault();  // a태그를 눌렀을때도 href 링크로 이동하지 못하게 막는다. (form태그 안 submit 버튼을 눌러도 실행을 막는다.)      
        setMyName (myName === "sunny" ? "hako" : "sunny");
    }

    return (
        <div>
            <div>안녕하세요. {myName} 입니다.</div>
            <button onClick={changeName}>Change</button>
            <a href="alert(1)" onClick={changeName}>change2</a>
        </div>
    );
};
    
export default Name;