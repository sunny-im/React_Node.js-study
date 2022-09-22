import React, {useEffect} from 'react'
import axios from 'axios'

const Starbucks = () => {
    const getData = () => {
        fetch("starbucks")
        .then(res=>{
            console.log('res',res)
        })
        .then(data => {
            console.log('data',data);
        })
    }

    useEffect(()=>{
        getData();
    },[])
    return (
    <div>
        <button 
        onClick={()=>{
            fetch("/starbucks")
            .then((res)=>{
                return res.json();
            })
            .then(data => {
                console.log(data);
            })
        }}
        >click</button>
    </div>
    )
}

export default Starbucks