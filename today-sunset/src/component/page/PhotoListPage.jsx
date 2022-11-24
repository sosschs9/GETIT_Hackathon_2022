import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Nav from "../ui/Nav";
import Footer from "../ui/footer";
import PhotoList from "../list/PhotoList";
import data from '../../data.json';

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

function PhotoListPage(props) {
    const {} = props;

    const navigate = useNavigate();

    return (
        <body class="d-flex flex-column min-vh-100">
            <Nav/>
            <Wrapper>
                <Container>
                    <PhotoList
                        photos={data}
                        onClickItem={(item) => {
                            navigate(`/photo/${item.index}`);
                        }}
                    />
                </Container>
            </Wrapper>
            <Footer/>
        </body>
    );
}

export default PhotoListPage;