import React, { useState } from "react";
import styled from "styled-components";

//사진 제목만 표시해주는 컴포넌트
const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 12px;
    display: flex;
    flex-direction:column;
    align-items : flex-start;
    justify-content:center;
    border: 1px solid grey;
    border-radius : 7px;
    cursor: pointer;
    background: white;
    :hover{
        background: lightgrey;
    }    
`;

const TitleText = styled.p`
    font-size:20px;
    font-weight:500;
`;

const countview = styled.p`
    float:right;
    font-size:8px;
    font-weight:500;
`;

const indexview = styled.p`
    float:left;
    font-size:8px;
    font-weight:500;
`;


function PhotoListItem(props){
    const{post, onClick} = props;
    const [count, setCount] = useState(props.count);
    return(
        <Wrapper onClick = {onClick}>
            <indexview>{post.index}</indexview>
            <TitleText>{post.title}</TitleText>
            <countview>{post.count}</countview>

        </Wrapper>
    );
}

export default PhotoListItem;