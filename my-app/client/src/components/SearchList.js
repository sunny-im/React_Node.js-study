import React from "react";
import SearchItem from "./SearchItem";


const SearchList = (props) => {
    const { searchData } = props;
    return (
        <div className="card-list">
            {searchData.map((item,idx)=>{
                return (
                    <SearchItem key={idx} item={item}/>
                )
            })}
        </div>
    );
};

export default SearchList;