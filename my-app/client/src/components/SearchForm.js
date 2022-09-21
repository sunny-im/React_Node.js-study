import React from "react";

const SearchForm = () => {
    const getData = () => {
        fetch("api/data")
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log(data);
        })
    }
    return (
    <div className="form">
        <input type="text" className="form-text" />
        <button
        type="button"
        className="form-btn"
        onClick={getData}
        >
        search
        </button>
    </div>
    );
};

export default SearchForm;