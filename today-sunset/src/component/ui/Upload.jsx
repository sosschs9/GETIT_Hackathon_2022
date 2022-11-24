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
        </div>
    );
}


export default Upload;