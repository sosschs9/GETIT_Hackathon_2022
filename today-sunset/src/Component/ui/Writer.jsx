import React, { useState } from 'react'
import styled from "styled-components";
import Button from "./Button";

function Writer(props)
{
    const[text, setText] = useState('');
    
    const onChange = (e) => {
        setText(e.target.value);
    };

    const onReset = () => {
        setText('');
    };

    return(
        <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">이름</span>
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
        <Button onClick={onChange} title={'입력'}></Button>
    </div>
    );
}

export default Writer;