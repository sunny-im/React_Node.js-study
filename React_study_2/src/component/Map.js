import React from "react";

const Map = () => {

    const num = [2,5,7,8]
    const numList = num.map(function(num){
        console.log('num',num);
            return num+1;
    });
    console.log('numList',numList);

    const numbers = [1,3,4,5,6,7];
    const numberList = numbers.map((number, idx) => {
        console.log('number',number);
        return number+1;
    });
    console.log('numberList',numberList)
}
export default Map;