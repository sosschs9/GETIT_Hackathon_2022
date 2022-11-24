import React, { useState } from 'react';
import styled from "styled-components";

const StyledLike = styled.button`
    padding : 8px 16px;
    font-size : 16px;
    border-width : 1px;
    border-radius : 8px;
    cursor : pointer;
`;

function Like() {
    const [ count, setCount ] = useState(0);

    const Increase = () => {
        setCount(count => count + 1);
    };

    return(
        <StyledLike onClick = {Increase}> like {count} </StyledLike>
    );
}

export default Like;