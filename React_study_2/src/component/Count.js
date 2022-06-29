import React, {useEffect, useState} from 'react' ;

const Main = () => {
    const [cnt, setCnt] = useState(0)
    const increseCnt = () => setCnt(cnt+5);
    const decreaseCnt = () => setCnt(cnt-1);
    const clearCnt = () => setCnt(0);

    useEffect(()=>{
        console.log("useEffect사용", cnt);
    })

    return (
        <div>
            클릭한 횟수 : {cnt}
            <div>
                <button onClick={increseCnt}>증가</button>
                <button onClick={decreaseCnt}>감소</button>
                <button onClick={clearCnt}>초기화하기</button>
            </div>
        </div>
    );
};

export default Main;