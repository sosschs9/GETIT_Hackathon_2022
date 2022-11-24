import React,{ useState } from "react";
import Button from "./Button";

function Upload(props){
    
    const[text, setText] = useState('');
    
    const onChange = (e) => {
        setText(e.target.value);
    };

    const onReset = () => {
        setText('');
    };

    return(
        <div class="input-group mb-3">
        <input type="file" class="form-control" id="inputGroupFile02"/>
        <Button onClick={onChange} class="input-group-text" for="inputGroupFile02" title={'파일 올리기'}></Button>
    </div>
    );
}


export default Upload;