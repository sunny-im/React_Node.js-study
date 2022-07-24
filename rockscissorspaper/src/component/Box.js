import React from 'react'

const Box = (props) => {
    console.log('props',props)
    let result;
    if(props.title === "Computer" && props.result != "TIE" && props.result != "") {
        result = props.result === "WIN" ? "LOSE" : "WIN";
    } else {
        result = props.result;
    }

    return (
    <div className={`box ${result}`}>
        <h1>{props.title}</h1>
        <h2>{props.item && props.item.name}</h2>
        <div className="img"><img className='item_img' src={props.item && props.item.img} alt="" /></div>
        <h2>{result}</h2>
    </div>
    ); 
};

export default Box