import React from "react";
import Main from './Main2';

const MapApp = () => {
    const name = [
        [1,'고양이'], 
        [2,'강아지'], 
        [3,'병아리']
    ]
    const nameList = name.map((name) => (<Main name={name[1]} age={name[0]}/>))
    return (
        <div>
            {nameList}
        </div>
    );
};

export default MapApp;