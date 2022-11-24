import React from "react";
import styled from "styled-components";
import PhotoListItem from "./PhotoListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function PhotoList(props) {
    const { photos, onClickItem } = props;

    return (
        <Wrapper>
            {photos.map((photo, index) => {
                return (
                    <PhotoListItem
                        key={photo.id}
                        photo={photo}
                        onClick={() => {
                            onClickItem(photo);
                        }}
                    />
                );
            })}
        </Wrapper>
    );
}

export default PhotoList;