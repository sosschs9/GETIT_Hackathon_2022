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
import MapView from '../ui/MapView';
import data from "../../data.json";

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

    return (
        <body class="d-flex flex-column min-vh-100">

            <Nav/>
            <section class="py-5">
                <div class="container px-4 px-lg-5 my-5">
                    <div class="row gx-4 gx-lg-5 align-items-center">
                        <div class="col-md-6"><MapView /></div>
               
                    </div>
                </div>
            </section>
            <Footer/>
        </body>
    );
}

export default MainPage;