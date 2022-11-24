import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PhotoListItem from "./PhotoListItem";

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
    
    return(
        <Wrapper> 
            {photos.map((photo, index, count)=>{
                return(
                    <PhotoListItem
                        key = {photo.index}
                        photo = {photo}
                        count = {photo.count}
                        onClick={()=>{
                            navigate(`/photo/${photo.index}`);
                        }}
                    />
                );
            })}
        </Wrapper>
    );
}

export default PhotoList;