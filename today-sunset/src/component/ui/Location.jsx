import React,{ useState } from "react";
import styled from "styled-components";
import Button from "./Button";

function Location(props){
    const[text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onReset = () => {
        setText('');
    };

    return(
        <div class="input-group">
        <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
        <option selected>노을의 위치를 알려주세요</option>
        <option value="1">이곳은 저만 알고 싶어요!</option>
        <option value="2">한국이 아니예요</option>
        <option value="3"> 
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">노을 제목</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={text} onChange={(e) => {setText(e.target.value);}}/>
        </div>
        </option>
        </select>
        <Button onClick={onChange} title={'위치적기'}></Button>
    </div>
    );
}

export default Location;