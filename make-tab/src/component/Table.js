import React, {useState} from 'react';
import data from '../data';
import '../App.css'

function Table() {
    console.log(data)
    const [datas, setDatas] = useState([]);
    
    
    return (
        <div className="wrap">
            <h2>json To Table</h2>
            <table>
                {datas.map((data1,idx) => {
                    return <tr key={idx}>{data1}</tr>
                })}
            </table>
        </div>
    );
}

export default Table;