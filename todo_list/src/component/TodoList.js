import React, {useEffect, useState } from 'react';
import axios from 'axios';
import {Container} from '@material-ui/core/';
import {Table} from '@material-ui/core/';
import {TableBody} from '@material-ui/core';
import {TableCell} from '@material-ui/core';
import {TableContainer} from '@material-ui/core';
import {TableHead} from '@material-ui/core';
import {TableRow} from '@material-ui/core';
import {Paper} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {TextField} from '@material-ui/core/';
import {Grid} from '@material-ui/core/';
import './TodoList.css';

const TodoList = () => {
    const [datas, setDatas] = useState([]);
    const [checked, setChecked] = useState("true");
    const [addBtn, setAddBtn] = useState(true);
    const [newTitle, setNewTitle] = useState("");
    const [isUpdate, setIsUpdate] = useState(false);
    const [changeTitle, setChangeTitle] = useState(datas.title);


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(response => setDatas(response.data))
            .catch(err => console.log(err));
    }, []);
    
    // useEffect(() => {
    //     const list = [...datas];
    //     const re_list = list.reverse();
    //     console.log('솔팅팅', re_list);
    // })

    /*
    const onChange = e => {
        const {value, name} = e.target;
        setInput({
            ...input,
            [name] : value
        });
    };
    */

    const onSave = () => {
        const newTodo = {
            userId : "1",
            id: datas.length + 1,
            title: newTitle,
            completed: false
        }
        setDatas([...datas, newTodo]);
        setNewTitle("");
    }

    const onDelete = id => {
        setDatas(datas.filter(item => item.id !== id));
    };

    const onUpdate = () => {
        const updateTitle = datas.map((item) => ({
            title : item.id === datas.id ? item.title : changeTitle,
        }));
        setChangeTitle(updateTitle);
        setIsUpdate(false);
    }
   

    return (
        <Container maxWidth="lg">
            <h2>Todo List</h2>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <TableCell colSpan={6} align="right">
                                    <Button variant="outlined" color="primary" size="small" onClick={() => setAddBtn(!addBtn)}>Add</Button>
                                </TableCell>
                            </TableRow>
                            {!addBtn&&(
                            <TableRow>
                                <TableCell align="right" colSpan={5}>
                                    <input type="text" name="title" onChange={(e) => setNewTitle(e.target.value)} value={newTitle} placeholder="Title"/>
                                </TableCell>
                                <TableCell align="right" colSpan={1}><Button variant="outlined" color="primary" size="small" onClick={() => {if(window.confirm(`등록할까요?`)){onSave()}}}>Submit</Button></TableCell>
                            </TableRow>
                            )}
                            <TableRow>
                                <TableCell align="center">No</TableCell>
                                <TableCell align="center">Title</TableCell>
                                <TableCell align="center">Completed</TableCell>
                                <TableCell align="center">Update</TableCell>
                                <TableCell align="center">Delete</TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {datas.map((item) => (
                                <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
                                    <TableCell align="center">{item.id}</TableCell>
                                    {isUpdate===item.id?(
                                        <TableCell align="center"><TextField id="filled-basic" label={item.title} variant="filled" maxRows={2}/></TableCell>
                                    ):(
                                        <TableCell align="center">{item.title}</TableCell>
                                    )}
                                    <TableCell align="center"><input type="checkbox" checked={item.completed}/></TableCell>

                                    {isUpdate === item.id ? (
                                    <TableCell align="center"><Button variant="outlined" color="primary" size="small" value="submit" onClick={()=>onUpdate(changeTitle)}>Submit</Button></TableCell>  
                                    ):(
                                    <TableCell align="center"><Button variant="outlined" color="primary" size="small" value="update" onClick={()=>(setIsUpdate(item.id))}>Update</Button></TableCell>
                                    )}

                                    <TableCell align="center"><Button variant="outlined" color="primary" size="small" onClick={()=>{if(window.confirm(`${item.id}번째 데이터 삭제할까염?`)){onDelete(item.id)}}}>Delete</Button></TableCell>
                                    <TableCell><Button variant="outlined" color="primary" size="small">Detail</Button></TableCell> 
                                </TableRow>
                            )).reverse()}
                            </TableBody>
                    </Table>
                </TableContainer>
        </Container>
    );
};
export default TodoList;