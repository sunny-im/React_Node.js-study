import React, {useEffect, useState } from 'react';
import axios from 'axios';
import {Table} from '@material-ui/core/';
import {TableBody} from '@material-ui/core';
import {TableCell} from '@material-ui/core';
import {TableContainer} from '@material-ui/core';
import {TableHead} from '@material-ui/core';
import {TableRow} from '@material-ui/core';
import {Paper} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {TextField} from '@material-ui/core/';
import './TodoList.css';

const TodoList = React.memo(() => {
    const [datas, setDatas] = useState([]);
    const [checked, setChecked] = useState("true");
    const [addBtn, setAddBtn] = useState(true);
    const [newTitle, setNewTitle] = useState("");
    const [isUpdate, setIsUpdate] = useState(false);
    const [changeTitle, setChangeTitle] = useState(datas.title);
    const [updateTargetId, setUpdateTargetId] = useState()
    

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(response => setDatas(response.data))
            .catch(err => console.log(err));
    }, []);

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
        const changeTitle = datas.map((item) => ({
            ...item,
            title : item.title === changeTitle.title ? isUpdate : item.title,
        }));
        setIsUpdate(changeTitle);
    }
    const clickUpdateBtn = (id) => {
        if (isUpdate) {
            setIsUpdate(false)
            setUpdateTargetId(id)

            onUpdate()

        } else {
            setIsUpdate(true)
            setUpdateTargetId(id)
        }
        
        
        return
    }


    return (
        <div className="container">
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
                            <TableCell colSpan={4}>
                                <input type="text" name="title" onChange={(e) => setNewTitle(e.target.value)} value={newTitle} placeholder="Title"/>
                            </TableCell>
                            <TableCell colSpan={1}><Button variant="outlined" color="primary" size="small" onClick={() => {if(window.confirm(`등록할까요?`)){onSave()}}}>Submit</Button></TableCell>
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


                                    {isUpdate && updateTargetId == item.id ?
                                        <TextField id="filled-basic" label={item.title} variant="filled" maxRows={2}/>
                                        : <TableCell align="center">{item.title}</TableCell>
                                    }


                                <TableCell align="center"><input type="checkbox" /></TableCell>
                                <TableCell align="center">
                                    <Button variant="outlined" color="primary" size="small" onClick={()=>clickUpdateBtn(item.id)}>
                                        {isUpdate && updateTargetId == item.id ? "Submit" : "Update" }
                                        </Button>
                                </TableCell>
                                

                                <TableCell align="center"><Button variant="outlined" color="primary" size="small" onClick={()=>{if(window.confirm(`${item.id}번째 데이터 삭제할까염?`)){onDelete(item.id)}}}>Delete</Button></TableCell>
                                <TableCell><Button variant="outlined" color="primary" size="small">Detail</Button></TableCell> 
                            </TableRow>
                        )).reverse()}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
});
export default TodoList;
