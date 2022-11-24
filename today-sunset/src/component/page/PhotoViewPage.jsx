import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Nav from "../ui/Nav";
import Footer from "../ui/footer";
import data from "../../data.json";
import Like from "../ui/Like";
import Button from "../ui/Button";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;
    
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

const PhotoContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
`;

const TitleText = styled.p`
    font-size: 28px;
    font-weight: 500;
`;

const ContentText = styled.p`
    font-size: 20px;
    line-height: 32px;
    white-space: pre-wrap;
`;

const ImageText = styled.p`
    position: absolute;
    width: 100px;
    height:100px;
    display:inline-block;
`

function PhotoViewPage(props) {
    const navigate = useNavigate();
    const { photoId } = useParams();

    const photo = data.find((item) => {
        return item.index == photoId;
    });

    return (
        <body class="d-flex flex-column min-vh-100">
            <Nav/>
            <Wrapper>
                <Container>
                    <PhotoContainer>
                        <TitleText>{photo.title}</TitleText>
                        <ContentText>{photo.content}</ContentText>
                        <span><Button title="작성자"></Button>  {photo.writer}</span><br/>
                        <span><Like/>{photo.like}</span><br/>
                        <span><Button title = "노을 시간"></Button>{photo.time}</span><br/>
                        <span><Button title = "노을 사진"></Button><br/>
                        <ImageText> <img src="C:\GETIT\GETIT_Hackathon_2022\today-sunset\public\images" alt=""/> </ImageText>
                        </span>
                        <span><Button title = "노을 내용"></Button> <br/> {photo.contents}</span>
                        
                        
                    </PhotoContainer>
                </Container>
            </Wrapper>
            <Footer/>
        </body>
    );
}

export default PhotoViewPage;