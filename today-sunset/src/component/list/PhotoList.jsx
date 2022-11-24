import React from "react";
import styled from "styled-components";
import PostListItem from "./PhotoListItem";
import { useNavigate } from "react-router-dom";

//PhotoListITem(한포스트에 대해 제목만 보여줌) 
const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items : flex-start;
    justify-content: center;

    &>*{
        :not(:last-child){
            margin-bottom: 16px;
        }
    }
`;

function PhotoList(props)
{
    const navigate = useNavigate();
    const{posts} = props;
    

    return(//map함수로 각 post자료 객체에 대해 PhotoListItem 컴포넌트(붕어빵)을 만들어 렌더링
        <Wrapper> 
            {posts.map((post, index,count)=>{
                return(
                    <PostListItem
                        key = {post.id}
                        post = {post}
                        count = {post.count}
                        onClick={()=>{
                            navigate("/post");
                            //setCount(count+1);
                        }}
                    />
                );
            })}
        </Wrapper>
    );
}

export default PhotoList;