import React, {useState} from "react";
import {Box, TextField, Button} from '@material-ui/core/';

const InputBox = () => {

    const [text, setText] = useState("");
    const onInput = (e) => {
        setText(e.target.value);
        console.log(e.target.value);
    }

    return (
        <Box component="div">
            <h3>To Do!</h3>
            {/* 아이템 내용 입력 input */}
            <TextField defaultValue={text} onChange={onInput}/>
            {/* 추가 버튼 */}
            <Button>추가</Button>
        </Box>
    );
};

export default InputBox;
