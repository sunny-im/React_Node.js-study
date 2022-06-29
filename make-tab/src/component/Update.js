import React, {useEffect, useState, useRef} from 'react';
import dummy from '../dummy.json';
import '../Table2.css'

function Update() {
    const [datas, setDatas] = useState(dummy);
    
    const [edited, setEdited] = useState(false);
    const [update, setUpdate] = useState(datas);



    const editInputRef = useRef(null);
    useEffect(() => {
        if (edited) {
            editInputRef.current.focus();
        }
    }, [edited]);

    const onClickEdit = () => {
        setEdited(true);
    }

    const onChangeEditInput = (e) => {
        setUpdate(e.target.value);
    }
    const onClickUpdate = () => {
        const newData = datas.map((item) => ({
            ...item,
            text : item.id === newData.id ? update : item.text,
        }));
        setDatas(newData);
        setEdited(false);
    }


    const column = Object.keys(datas[0]);
    return (
        <div className="container">
            <div className="wrap">
                <table className="table table-striped">
                <thead>
                    <tr>
                        <th></th>
                        {column.map((dummy, i) => (
                            <th key={i}>{dummy}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                {datas.map((dummy, i) => (
                    <tr key={i}>
                        <td><button className="btn btn-dark" onClick={onClickEdit}>수정</button></td>
                        <td>{dummy.id}</td>
                        <td>{dummy.name}</td>
                        <td>{dummy.age}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    );
}

export default Update;