import React from "react";
import {Box, List} from '@material-ui/core/';
import TodoItem from "./TodoItem";

const TodoItemList = () => {
    return(
    <Box component="div"> 
        <h3>Title</h3>
        <List>
            <TodoItem />
        </List>
    </Box>
    );
}

export default TodoItemList;