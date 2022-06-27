import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Table} from '@material-ui/core';
import {TableBody} from '@material-ui/core';
import {TableCell, tableCellClasses} from '@material-ui/core';
import {TableContainer} from '@material-ui/core';
import {TableHead} from '@material-ui/core';
import {TableRow} from '@material-ui/core';
import {Paper} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {Checkbox} from '@material-ui/core';
import './TodoList.css';

function TodoList() {
    const [datas, setDatas] = useState([]);
    const [checked, setChecked] = useState("true");
    const [addBtn, setAddBtn] = useState(true);
    const [input, setInput] = useState({
        id : "",
        title : "",
    })
    
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(response => setDatas(response.data))
            .catch(err => console.log(err));
    }, []);
    

    const onChange = e => {
        const {value, name} = e.target;
        setInput({
            ...input,
            [name] : value
        });
    };

    const onSave = () => {
        setDatas([input, ...datas]);
        setInput({
            userId : "1",
            id : "",
            title : "",
            completed : "",
        });
    }

    const onDelete = id => {
        setDatas(datas.filter(item => item.id !== id));
    };
    return (
        <div className="container">
            <h2>Todo List</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <TableCell colSpan={5}>
                                <Button variant="outlined" color="primary" size="small" onClick={() => setAddBtn(!addBtn)}>Add</Button>
                            </TableCell>
                        </TableRow>
                        {!addBtn&&(
                        <TableRow>
                            <TableCell colSpan={1}></TableCell>
                            <TableCell colSpan={3}>
                                <input type="text" name="title" onChange={onChange} value={input.title}/>
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {datas.map((item) => (
                            <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
                                <TableCell align="center">{item.id}</TableCell>
                                <TableCell align="center">{item.title}</TableCell>
                                {/* <Tall><input type="checkbox" className={checked === {item.completed} ? "checked" : "unChecked"}/></Tall> */}                        
                                <TableCell align="center"><input type="checkbox"/></TableCell>
                                <TableCell align="center"><Button variant="outlined" color="primary" size="small">Update</Button></TableCell>
                                <TableCell align="center"><Button variant="outlined" color="primary" size="small" onClick={()=>{if(window.confirm(`${item.id}번째 데이터 삭제할까염?`)){onDelete(item.id)}}}>Delete</Button></TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
export default TodoList;