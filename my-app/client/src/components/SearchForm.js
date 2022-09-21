import React, {useState} from "react";

const SearchForm = (props) => {
    const [keyword, setKeyword] = useState('');
    const {getData} = props;

    return (
    <div className="form">
        <input type="text" className="form-text" 
            onChange={(e)=>setKeyword(e.target.value)}
        />
        <button type="button" className="form-btn" onClick={()=>{if(keyword) getData(keyword)}}>
        search
        </button>
    </div>
    );
};

export default SearchForm;