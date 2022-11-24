import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Nav from "../ui/Nav";
import Footer from "../ui/footer";
import data from "../../data.json";
import Like from "../ui/Like";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";

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
    font-size: 18px;
    line-height: 32px;
    white-space: pre-wrap;
`;


function PhotoViewPage() {
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
                    <span><Like/> {photo.like} 개</span><br/>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <p>작성자 : </p>
                            </div>
                            <div class="col-6">
                                <p>{photo.writer}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <p>노을시간 : </p>
                            </div>
                            <div class="col-6">
                                <p>{photo.time}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <p>노을사진 : </p>
                            </div>
                            <div class="col-6">
                                <img src={image1} alt="" style={{
                                width: "100%",
                                height: "auto" }}/> 
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <p>노을내용 : </p>
                            </div>
                            <div class="col-6">
                                <ContentText>{photo.contents}</ContentText>
                            </div>
                        </div>
                    </div>
                    </PhotoContainer>
                </Container>
            </Wrapper>
            <Footer/>

        </body>
    );
}

export default PhotoViewPage;