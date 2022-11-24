import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Nav from "../ui/Nav";
import Footer from "../ui/footer";
import Like from "../ui/Like";
import data from "../../data.json";

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

function PhotoViewPage(props) {
    const navigate = useNavigate();
    const { photoId } = useParams();

    const photo = data.find((item) => {
        return item.id == photoId;
    });

    const [like, setLike] = useState("");

    return (
        <body class="d-flex flex-column min-vh-100">
            <Nav/>
            <Wrapper>
                <Container>
                    <PhotoContainer>
                        <TitleText>{photo.title}</TitleText>
                        <ContentText>{photo.content}</ContentText>

                    </PhotoContainer>
                </Container>
            </Wrapper>
            <Footer/>
        </body>
    );
}

export default PhotoViewPage;
