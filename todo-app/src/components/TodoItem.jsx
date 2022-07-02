import React, {useState, useEffect, useRef} from "react";
import {List, Box, Button, Checkbox, TextField} from '@material-ui/core/';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';

const TodoItem = ({todoItem, todoList, setTodoList}) => {
    const [edited, setEdited] = useState(false); // 수정모드인지 확인용
    const [newText, setNewText] = useState(todoItem.text); // 수정한 새로운 아이템 내용!
    const editInputRef = useRef(null);

    const onChangeCheckbox = () => {
        const nextTodoList = todoList.map((item)=> ({
            ...item,
            // id 값이 같은 항목의 checked값을 토글
            checked : item.id === todoItem.id ? !item.checked : item.checked,
        })) 
        setTodoList(nextTodoList);
    }

    const onClickEditBtn = () => {
        // 클릭 시 edited값을 true로 변경
        setEdited(true);
    }

    const onChangeEditInput = (e) => {
        setNewText(e.target.value);
    };

    const onClickSubmitBtn = () => {
        const nextTodoList = todoList.map((item) => ({
            ...item,
            text : item.id === todoItem.id ? newText : item.text, // 수정한 새로운 내용 넣기
        }));
        setTodoList(nextTodoList); // 리스트에 넣기
        setEdited(false); // 수정모드를 다시 읽기모드로 변경
    };

    useEffect(() => {
        // edit 모드일 때 포커싱
        if(edited) {
            editInputRef.current.focus();
        }
    },[edited]);

    const onClickDeleteBtn = () => {
        if (window.confirm('삭제할꺼야?')) {
            const nextTodoList = todoList.map((item) => ({
                ...item,
                deleted : item.id === todoItem.id ? true : item.deleted,
            }));
            setTodoList(nextTodoList);
        }
    }
    return (
    <List>
        {/* 완료 체크 할 체크박스 */}
        <Checkbox checked={todoItem.checked} onChange={onChangeCheckbox} />
        
        {/* 아이템 내용 */}
        {edited ? (
            <TextField ref={editInputRef} onChange={onChangeEditInput}/>
        ):(
            <Box component="span">{todoItem.text}</Box>
        )}
        
        {/* 완료된 것은 내용 수정이 불가능하도록 수정버튼 null로 반환 */}
        {!todoItem.checked ? (
            edited ? (
                <Button onClick={onClickSubmitBtn}><DoneIcon/></Button> 
            ) : (
        <Button onClick={onClickEditBtn}><EditIcon/></Button> 
            )
        ) : null }
        <Button onClick={onClickDeleteBtn}><DeleteIcon/></Button>
    </List>
    );
};

TodoItem.propTypes = {
    todoItem: PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string.isRequired,
    }),
    todoList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
      })
    ),
    setTodoList: PropTypes.func.isRequired,
  };
export default TodoItem;