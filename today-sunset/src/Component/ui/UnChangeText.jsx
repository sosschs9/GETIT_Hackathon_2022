import React from "react";
import styled from "styled-components";

function unChangeText(props){

    const {title, onClick} = props;
    return(
        <button type="button" class="btn btn-info" onClick={onClick}>글작성하기</button>
    );
}

export default unChangeText;