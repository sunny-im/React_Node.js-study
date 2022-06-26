import React, {useState} from 'react';
import data from '../data';
import '../Table2.css'


function Table() {
    const [datas, setDatas] = useState("");
    const [btn, setBtn] = useState("hide");
    function onChange(e) {
        return(setDatas({datas:e.target.value}))
    }
    console.log(data)
    const column = Object.keys(data[0]);
    console.log(column);
    return (
        <div className="wrap">
            <h2 className="header">json To Table</h2>
            <button>{btn}</button>
            <table className={setBtn === "hide" ? "table_content" : "active"}>
                <thead>
                    <tr>
                        {column.map((data, i) => (
                            <th key={i}>{data}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                {data.map((data, i) => (
                    <tr>
                        <td>{data.일자}</td>
                        <td>{data.캠페인}</td>
                        <td>{data.광고매체}</td>
                        <td>{data.광고목표}</td>
                        <td>{data.타겟팅}</td>
                        <td>{data.광고매체}</td>
                        <td>{data.광고소재}</td>
                        <td>{data.노출수}</td>
                        <td>{data.클릭수}</td>
                        <td>{data.CTR}</td>
                        <td>{data.CPC}</td>
                        <td>{data.CPM}</td>
                        <td>{data.총비용}</td>
                        <td>{data.DB}</td>
                        <td>{data.CPA}</td>
                        <td>{data.Score}</td>
                        <td>{data.Status}</td>
                        <td>{data.소재보기}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;