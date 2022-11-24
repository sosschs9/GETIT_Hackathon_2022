import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

function Subject(props){

    const[text, setText] = useState('');
    
    const onChange = (e) => {
        setText(e.target.value);
    };

    const onReset = () => {
        setText('');
    };

    return(
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">노을 제목</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={text} onChange={(e) => {setText(e.target.value);}}/>
           </div>
    );
}




export default Subject;