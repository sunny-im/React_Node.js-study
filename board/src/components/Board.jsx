import React, {useState} from "react";
import './Board.css';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from 'react-html-parser';

const Board = () => {
    
    const [contents, setContents] = useState({content : ""});
    const [view, setView] = useState([]);

    const contentChange = (event, editor) => {
        const data = editor.getData();
        setContents({
            ...contents,
            content: data
        })
            console.log('content',contents);
    }

    const submit = () => {
        // view 배열에 contents 추가 해서 변경
        setView(view.concat({...contents}));
    }

    return (
    <div>
        <h2>CKEditor</h2>
        <CKEditor
            editor={ClassicEditor}
            data='<p>Hello from CKEditor 5!</p>'
            onChange={contentChange}
        />
        <button className="submitBtn" onClick={submit}>등록</button>
        <h2>작성된 내용</h2>
        {view.map((item,idx) => 
            <div key={idx} className="contents">{ReactHtmlParser(item.content)}</div>
        )}
    </div>
    ); 
};

export default Board;