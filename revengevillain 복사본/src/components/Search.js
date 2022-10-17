import React, {useState} from 'react'
import {Box, TextField, Button} from '@material-ui/core';

const Search = () => {

  return (
    <div>
      <Box className="searchFeild">
        <TextField className="searchNickname" id="outlined-basic" label="닉네임 입력하세요" variant="outlined" size="small"/>
        <TextField className="searchUrl" id="outlined-basic" label="steam url을 입력하세요" variant="outlined" size="small" />
        <Button className="addBtn" variant="outlined">Find</Button>
      </Box>
		</div>
  )
}

export default Search;