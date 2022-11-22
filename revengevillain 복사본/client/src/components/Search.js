import React, {useState} from 'react'
import {Box, TextField, Button} from '@material-ui/core';

const Search = ({searchKeyword,setSearchKeyword,onSearch}) => {

  // const handleInput = (name, value) => {
  //   setKeyword({keyword, [name]:value})
  //   console.log('name',name)
  //   console.log('value',value)
  //   console.log('keyword123',keyword)
  // }
  

  const getKeyword = e => {
    const {name,value} = e.target;
    setSearchKeyword ({
      ...searchKeyword,
      [name]:value
    })
    // console.log("key",searchKeyword)
  }
  return (
    <div>
      <Box className="searchFeild">
        <TextField className="searchNickname" id="outlined-basic" label="닉네임 입력하세요" variant="outlined" size="small" onChange={getKeyword} name="nickname"/>
        <TextField className="searchUrl" id="outlined-basic" label="steam url을 입력하세요" variant="outlined" size="small" onChange={getKeyword} name="url"/>
        <Button className="addBtn" variant="outlined" onClick={(e)=>onSearch()}>Find</Button>
      </Box>
		</div>
  )
}

export default Search;