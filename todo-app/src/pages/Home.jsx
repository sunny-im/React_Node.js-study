import React, {useState} from "react";
import InputBox from '../components/InputBox';
import TodoItemList from '../components/TodoItemList';
import {Container, Box} from '@material-ui/core/';

const Home = () => {

    const [todoList, setTodoList] = useState([]); // todo 아이템을 담을 리스트와 setter 함수 생성

    return (
        <Container maxWidth="lg">
            <Box component="div">
                {/* Todo Item을 추가할 수 있는 input 박스 */}
                {/* 입력한 값을 todoList에 담기위해 InputBox 컴포넌트로 todoList와 setTodoList()를 넘겨준다. */}
                <InputBox todoList={todoList} setTodoList={setTodoList}/>

                {/* 할 일 Item 리스트 */}
                <TodoItemList   // 목록에 props 전달
                    title ={'해야 할 것'}    // title
                    todoList = {todoList}   // 목록
                    setTodoList = {setTodoList} // 변경되는 목록 값
                    checkedList={false} 
                />

                {/* 완료한 Item  리스트 */}
                <TodoItemList
                    title = {'완료한 것'}
                    todoList = {todoList}   
                    setTodoList = {setTodoList} 
                    checkedList={true} 
                />
            </Box>
        </Container>
    );
};

export default Home;