import React from "react";
import {Box, List} from '@material-ui/core/';
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';

const TodoItemList = ({title, todoList, setTodoList, checkedList}) => {
    return(
    <Box component="div"> 
        {/* props로부터 title값 전달 받음 */}
        <h3>{title}</h3>
        <List>
            {todoList && todoList.map((todoItem)=> { // todoList가 있을때만 출력 , map을 이용하여 todoItem 출력
                if(todoItem.deleted) return null; // 삭제항목일 경우 출력하지 않음 (deleted가 true)
                if(checkedList !== todoItem.checked) return null; // 화면에 출력하고 싶지 않을 때 return null !
                
                return (
                <TodoItem 
                    key = {todoItem.id}
                    todoItem = {todoItem}
                    todoList = {todoList}
                    setTodoList = {setTodoList}
                />
                );
                })}
        </List>
    </Box>
    );
}
TodoItemList.propTypes = {  
    title : PropTypes.string.isRequired,
    todoList : PropTypes.arrayOf (  
        PropTypes.shape({   
            id : PropTypes.number.isRequired, 
            text : PropTypes.string.isRequired, 
        }).isRequired
    ),
    setTodoList : PropTypes.func.isRequired,
};
export default TodoItemList;