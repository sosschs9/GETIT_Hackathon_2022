import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PhotoListItem from "./PhotoListItem";

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
    const{photos} = props;
    

    return(//map함수로 각 post자료 객체에 대해 PhotoListItem 컴포넌트(붕어빵)을 만들어 렌더링
        <Wrapper> 
            {photos.map((photo, index, count)=>{
                return(
                    <PhotoListItem
                        key = {photo.index}
                        photo = {photo}
                        count = {photo.count}
                        onClick={()=>{
                            navigate(`/photo/${photo.index}`);
                            //setCount(count+1);
                        }}
                    />
                );
            })}
        </Wrapper>
    );
}

export default PhotoList;