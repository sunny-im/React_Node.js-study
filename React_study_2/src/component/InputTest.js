import React, {useState} from "react";

function InputSample() {
    const [text, setText] = useState("");
    const [inputs, setInputs] = useState({  // input이 여러개일때 기존의 문자열 대신 여러개의 문자열을 가진 객체 형태로 관리한다.
        name : "",
        nickname : "",
    });
    const { name, nickname} = inputs;
    const onChange =(e) => {    // 객체 e = 이벤트가 발생했을 때 그 이벤트에 대한 내용이 저장된다.
        //console.log(e.target.value);
        //setText(e.target.value);
        const { name, value } = e.target;   // 비구조화 할당으로 name과 nickname을 추출 (e.target.name ==> name과 nickname/ e.target.value ==> 사용자가 입력한 값를 간략하게 name,value로 사용하기 위함)

        setInputs({         // spread 문법을 사용해서 기존의 상태를 한 번 복사하고 거기에 특정 값을 덮어 씌우고 그것을 새로운 상태로 설정!
            ...inputs,
            [name] : value,
        });
    };
    const onReset = () => {
        //setText("");
        setInputs("");
    };

    return (
        <div>
            {/* value값을 설정해 주어야 나중에 초기화 버튼을 눌러 input을 비워지게 하는 것이 가능하다! 
            setText를 사용해서 text값이 바뀌었을 때 input에 있는 값 변경위함*/}
            {/* <input type="text" onChange={onChange} value={text}/>    */}

            <input type="text" name="name" placeholder="이름" onChange={onChange} value={name}/>
            <input type="text" name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>

            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 :</b>
                {/* {text} */}
                {name}({nickname})
            </div>
        </div>
    )
}

export default InputSample;