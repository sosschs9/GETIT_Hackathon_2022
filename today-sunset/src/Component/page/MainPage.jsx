import '../../App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios'; // npm install axios
import styled from 'styled-components';
import Button from '../ui/Button';
import Location from '../ui/Location';
import Subject from '../ui/Subject';
import Time from '../ui/Time';
import Upload from '../ui/Upload';
import Writer from '../ui/Writer';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Text from '../ui/Text';
import background from "../../img/placeholder.jpg";
import Nav from '../ui/Nav';
import Footer from '../ui/Footer';

const Wrapper = styled.div`
    width: calc(100%-32px);
    padding : 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
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

function MainPage(props){
    const{} = props;

    const navigate = useNavigate();

    return(
        <div style = {{backgroundImage: `url(${background})`}}>
        <Wrapper>
            <Container>
                <Nav/>
                <h1>HiHi This is main page</h1>
                <Footer/>
            </Container>
        </Wrapper>
        </div>
    );
}

export default MainPage;