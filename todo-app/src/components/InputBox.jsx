import React, {useState, useRef, useEffect} from "react";  
import {Box, TextField, Button} from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types'; // PropTypes는 React에서 타입 체크를 위해서 사용되는 라이브러리(설치 : yarn add prop-types / npm i prop-types)

const InputBox = ({todoList, setTodoList}) => { // 부모컴포넌트(Home)로 부터 props로 todoList,setTodoList 받아옴

    const [text, setText] = useState("");   // 빈 문자열의 text와 setText() 함수를 생성
    const inputRef = useRef(null);  // Hook으로 ref 생성 , useRef는 DOM에 직접적으로 접근할 때 사용한다. (== js getElementById)
                                    // useRef는 .current 프로퍼티로 전달된 인자로 초기화된 변경 가능한 ref 객체를 반환합니다. 

    const onChangeInput = (e) => {    // input이 변화하는 이벤트가 발생했을 때 e.target에 있는 <TextField/>로부터 value를 가져온다.
        setText(e.target.value);
        //console.log(e.target.value);
    };

    const onClickAddBtn = (e) => {
        e.preventDefault();
        // todoItemList에 값 추가
        const nextTodoList = todoList.concat({  // 입력한 값을 setTodoList()를 이용하여 todoList에 추가
            // concat 함수는 인자로 받은 값을 배열에 추가하여 새로운 배열을 반환한다.
            id : todoList.length,   // 아이템 마다 id 식별자를 넣고, 이는 배열의 길이로 설정
            text,   // 아이템 내용
            checked : false,
            deleted : false,
        });
        setTodoList(nextTodoList);

        setText('');    // setText(입력한 값)에 빈 문자열을 넣어 초기화
        inputRef.current.focus(); // ref.current로 <TextField/>태그에 접근하여 포커싱
    };

    // 기능 동작 확인용 ..
    // useEffect(()=>{ // todoList가 변했을 때만 실행됨
    //     console.log(todoList);
    // },[todoList]);

    return (
        <Box component="div">
            <h3>To Do!</h3>
            {/* 변화가 일어났는지 감지하는 onChange로 <TextField/>에 변화가 생기면 onInput() 함수 실행 */}
            {/* ref={} 할당 */}
            <TextField defaultValue={text} placeholder="할 일을 입력하세요 !" onChange={onChangeInput} ref={inputRef}/>
            {/* 추가 버튼 */}
            <Button onClick={onClickAddBtn}><AddIcon/></Button>
        </Box>
    );
};

// 자식컴포넌트에서 props 타입 검증을 위한 모듈로 props 값 검증
InputBox.propTypes = {  // prop-types를 이용하여 props의 타입을 강제한다.
    todoList : PropTypes.arrayOf (  // todoList는 배열이어야 하고
        PropTypes.shape({   // todoList의 원소는 객체여야 하고
            id : PropTypes.number.isRequired, // id는 숫자
            text : PropTypes.string.isRequired, // text는 문자열
        }).isRequired
    ),
    setTodoList : PropTypes.func.isRequired,    // setTodoList는 함수여야 한다.
};
export default InputBox;
