import React, {useState} from 'react';
import data from '../data';
import '../App.css'

function Table2() {
    //const [datas, setDatas] = useState("");
    // 컬럼 
    const column = Object.keys(data[0]);
    // 제목 데이터
    const thData = () => {
        return column.map((title)=>{
            return <th key={title}>{title}</th>
        })
    }
    // 행 데이터
    const tdData = () => {
        return data.map((data)=> {
            return (
                <tr>
                    {
                        column.map((content)=>{
                            return <td>{data[content]}</td>
                        })
                    }
                </tr>
            )
        })
    }
    return (
        <div className="wrap">
            <h2>json To Table2</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>{thData()}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{tdData()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table2;