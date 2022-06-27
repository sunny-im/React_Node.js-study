import React, {useEffect, useState} from 'react';
import data from '../data';
import '../Table2.css'

function Table() {
    const [datas, setDatas] = useState(data);
    const [open, setOpen] = useState(true);
    const [btn, setBtn] = useState("hide");
    const [addBtn, setAddBtn] = useState(true);
    // input 값이 여러개일때!
    const [input, setInput] = useState({
        일자 : "",
        캠페인 : "",
        광고매체 : "",
        광고목표 : "",
        타겟팅 : "",        
        광고소재 : "",
        노출수 : "",
        클릭수 : "",
        CTR : "",
        CPC : "",
        CPM : "",
        총비용 : "",
        DB : "",
        CPA : "",
        Score : "",
        Status: "",
        소재보기: "",
    });
    
    const onChange = e => {
        const { value, name } = e.target; // e.target에서 date,campaign 추출
        setInput({
            ...input,   // 기존의 input 객체를 복사한 뒤
            [name] : value // name 키를 가진 값을 value로 설정
        });
    };

    // 초기화
    const onReset = () => {
        setInput({
            일자 : "",
            캠페인 : "",
            광고매체 : "",
            광고목표 : "",
            타겟팅 : "",        
            광고소재 : "",
            노출수 : "",
            클릭수 : "",
            CTR : "",
            CPC : "",
            CPM : "",
            총비용 : "",
            DB : "",
            CPA : "",
            Score : "",
            Status: "",
            소재보기: "",
        });
    };

    // 데이터 추가..? (spread 연산자?)
    const onSave = () => {
        //console.log(input);
        setDatas([input, ...datas]);
        setInput({
            일자 : "",
            캠페인 : "",
            광고매체 : "",
            광고목표 : "",
            타겟팅 : "",        
            광고소재 : "",
            노출수 : "",
            클릭수 : "",
            CTR : "",
            CPC : "",
            CPM : "",
            총비용 : "",
            DB : "",
            CPA : "",
            Score : "",
            Status: "",
            소재보기: "",
        });
    }

    // 데이터 삭제
    const onDelete = (id) => {
    };
    const idx = datas.map((data,i) => console.log('i 는', i));
    // test....
    /*
    const inputOnChange = (e) => {
        console.log(e.target.value); 
    }
    */

    // 테이블 show/hide
    const switchBtn = () => {
       // console.log('btn',btn);
        setBtn(btn === "hide"?"show" : "hide");
    }

    useEffect(() => {
        console.log('datas', datas);
    }, [datas])

    //console.log(data)
      // 컬럼 가져오기
    const column = Object.keys(datas[0]);
    return (
        <div className="container">
            <div className="wrap">
                <h2>json To Table</h2>
                <button onClick={switchBtn}>{btn}</button>
                <button className={open?'btn btn-danger':'btn btn-primary'} onClick={() => setOpen(!open)}>{open?'hide':'show'}</button>
                <button className="btn btn-warning" onClick={() => setAddBtn(!addBtn)}>Add</button>
                <button className="btn btn-dark" onClick={onReset}>Reset</button>
                {open&&(        // 간단하게 조건을 줄 수 있다!!! {조건이 true이면&&실행할구문}
                    <table className="table table-striped">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            {column.map((data, i) => (
                                <th key={i}>{data}</th>
                            ))}
                        </tr>
                        {!addBtn&&(
                        <tr>
                            <th colSpan={2}><button className="btn btn-dark" type='submit' onClick={(e) => onSave(e)}>등록</button></th>
                            <th><input type="text" name="일자" placeholder='일자' onChange={onChange} value={input.일자}/></th>
                            <th><input type="text" name ="캠페인" placeholder='캠페인' onChange={onChange} value={input.캠페인}/></th>
                            <th><input type="text" name ="광고매체" placeholder='광고매체' onChange={onChange} value={input.광고매체}/></th>
                            <th><input type="text" name ="광고목표" placeholder='광고목표' onChange={onChange} value={input.광고목표}/></th>
                            <th><input type="text" name ="타겟팅" placeholder='타겟팅' onChange={onChange} value={input.타겟팅}/></th>
                            <th><input type="text" name ="광고소재" placeholder='광고소재' onChange={onChange} value={input.광고소재}/></th>
                            <th><input type="text" name ="노출수" placeholder='노출수' onChange={onChange} value={input.노출수}/></th>
                            <th><input type="text" name ="클릭수" placeholder='클릭수' onChange={onChange} value={input.클릭수}/></th>
                            <th><input type="text" name ="CTR" placeholder='CTR' onChange={onChange} value={input.CTR}/></th>
                            <th><input type="text" name ="CPC" placeholder='CPC' onChange={onChange} value={input.CPC}/></th>
                            <th><input type="text" name ="CPM" placeholder='CPM' onChange={onChange} value={input.CPM}/></th>
                            <th><input type="text" name ="총비용" placeholder='총비용' onChange={onChange} value={input.총비용}/></th>
                            <th><input type="text" name ="DB" placeholder='DB' onChange={onChange} value={input.DB}/></th>
                            <th><input type="text" name ="CPA" placeholder='CPA' onChange={onChange} value={input.CPA}/></th>
                            <th><input type="text" name ="Score" placeholder='Score' onChange={onChange} value={input.Score}/></th>
                            
                        </tr>
                        )}
                    </thead>
                    <tbody className={btn === "hide" ? "table_content active" : "table_content"}>
                        {input.일자!==''&&(
                        <tr>
                            <td></td>
                            <td></td>
                            <td>{input.일자}</td>
                            <td>{input.캠페인}</td>
                            <td>{input.광고매체}</td>
                            <td>{input.광고목표}</td>
                            <td>{input.타겟팅}</td>
                            <td>{input.광고소재}</td>
                            <td>{input.노출수}</td>
                            <td>{input.클릭수}</td>
                            <td>{input.CTR}</td>
                            <td>{input.CPC}</td>
                            <td>{input.CPM}</td>
                            <td>{input.총비용}</td>
                            <td>{input.DB}</td>
                            <td>{input.CPA}</td>
                            <td>{input.Score}</td>
                        </tr>
                        )} 
                    {datas.map((data, i) => (
                        <tr key={i}>
                            <td><button className="btn btn-dark">수정</button></td>
                            <td><button className="btn btn-dark" onRemove={onDelete}>삭제</button></td>
                            <td>{data.일자}</td>
                            <td>{data.캠페인}</td>
                            <td>{data.광고매체}</td>
                            <td>{data.광고목표}</td>
                            <td>{data.타겟팅}</td>
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
                )}
            </div>
        </div>
    );
}

export default Table;