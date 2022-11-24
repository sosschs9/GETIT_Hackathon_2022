import React, { useState } from 'react';
import styled from "styled-components";
import data from "../../data.json";

const StyledLike = styled.button`
    padding : 8px 16px;
    font-size : 16px;
    border-width : 1px;
    border-radius : 8px;
    cursor : pointer;
`;

function Like() {
    const [ like, setCount ] = useState(0);

    const Increase = () => {
        setCount(like => like + 1);
    };

    return(
        <StyledLike onClick = {Increase}> like {data.like} </StyledLike>
    );
}

export default Like;