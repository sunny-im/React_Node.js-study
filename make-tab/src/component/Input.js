import React, { useState } from 'react'  

function Input() {
    //갹채를 업데이트하기위해 useState안에 객체를 사용
    const [inputs, setInputs] = useState({  
        name: '',
        nickname: '',
    })
    //값을 가져오기 위해 inputs에 name으로 가져왔다
    const { name, nickname } = inputs   

    const onChange = (e) => {
       //input에 name을 가진 요소의 value에 이벤트를 걸었다
    const { name, value } = e.target   

   // 변수를 만들어 이벤트가 발생했을때의 value를 넣어줬다
    const nextInputs = {            
   //스프레드 문법으로 기존의 객체를 복사한다.
            ...inputs,  
            [name]: value,
        }
   //만든 변수를 seInput으로 변경해준다.
        setInputs(nextInputs)       

    }
   //안의 값을 초기화하는 객체를 변수에 넣었다
    const onReset = () => {
        const resetInputs = {       
            name: '',
            nickname: '',
        }
   //초기화 객체값을 넣은 변수로 변경하도록 셋인풋 실행
        setInputs(resetInputs)      
    }

    return (
        <div>
            <input         
                name="name"      //위에서 name의 값을 가져와 타겟을 가져온다.
                placeholder="이름"
                onChange={onChange}
                value={name}     //가져온 타겟의 벨류값을 변경할때 사용한다.
            />
            <input
                name="nickname"  //위에서 nickname의 값을 가져와 타겟을 가져온다.
                placeholder="닉네임"
                onChange={onChange}
                value={nickname} //가져온 타겟의 벨류값을 변경할때 사용한다.
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name}:({nickname})
            </div>
        </div>
    )
}

export default Input;