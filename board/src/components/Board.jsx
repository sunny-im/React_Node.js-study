import React from "react";
import '../css/Board.css';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const App = () => {
  return (
    <div>
        <h2>CKEditor</h2>
        <CKEditor
            editor={ClassicEditor}
            data='<p>Hello from CKEditor 5!</p>'
            onChange={(event, editor) => {
            const data = editor.getData();
            console.log(data);
            }}
        />
    </div>
  );
};

export default App;