import React from 'react'

const InputBox = () => {
	return (
		<div>
			<Box className="addField">
				<h4>New Steam User 등록</h4>
				<TextField id="outlined-textarea" label="닉네임" variant="outlined" size="small" multiline value={newNickName} onChange={(e) => setNewNickName(e.target.value)}/>
				<TextField id="outlined-textarea" label="유형" variant="outlined" size="small" multiline name='type' value={newType} onChange={(e) => setNewType(e.target.value)}/>
				<TextField id="outlined-textarea" label="발생일자" variant="outlined" size="small" multiline name='date' value={newDate} onChange={(e) => setNewDate(e.target.value)}/>
				<TextField id="outlined-textarea" label="url 파라미터" variant="outlined" size="small" multiline name='parameter' value={newParameter} onChange={(e) => setNewParameter(e.target.value)}/>
				<Button onClick={handleBtnClick}>이미지업로드</Button>
				<input ref={imgInput} onChange={handleChange} type="file" id="fileUpload" style={{display:"none"}}/>
				<Button variant="outlined" onClick={()=>{onSubmit()}}>Submit</Button>
			</Box>
		</div>
	)
}

export default InputBox