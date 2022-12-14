import React,{useEffect}  from 'react'
import {TextField, Button, Box} from '@material-ui/core';

const InputBox = ({getValue,handleBtnClick,submitContent,handleChange,imgInput,viewContent}) => {
	
  useEffect(()=>{

  },[])
	return (
		<div>
			<Box className="addField">
				<h4>New Steam User 등록</h4>
				<TextField id="outlined-textarea" label="닉네임" variant="outlined" size="small" multiline name='nickName' onChange={getValue}/>
				<TextField id="outlined-textarea" label="유형" variant="outlined" size="small" multiline name='type' onChange={getValue}/>
				<TextField id="outlined-textarea" label="발생일자" variant="outlined" size="small" multiline name='date' onChange={getValue}/>
				<TextField id="outlined-textarea" label="url 파라미터" variant="outlined" size="small" multiline name='parameter' onChange={getValue}/>
				<Button onClick={handleBtnClick}>이미지업로드</Button>
				<input ref={imgInput} onChange={handleChange} type="file" id="fileUpload" style={{display:"none"}}/>
				<Button variant="outlined" onClick={submitContent}>Submit</Button>
			</Box>
		</div>
	)
}

export default InputBox