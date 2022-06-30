import React from "react";
import InputBox from '../components/InputBox';
import TodoItemList from '../components/TodoItemList';
import {Container, Box} from '@material-ui/core/';

const Home = () => {
    return (
        <Container maxWidth="lg">
            <Box component="div">
                {/* Todo Item을 추가할 수 있는 input 박스 */}
                <InputBox/>

                {/* 할 일 Item 리스트 */}
                <TodoItemList/>

                {/* 완료한 Item  리스트 */}
                <TodoItemList/>
            </Box>
        </Container>
    );
};

export default Home;