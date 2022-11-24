import logo from './logo.svg';
import './App.css';
import React from "react";
import styled from "styled-components";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import MainPage from './Component/page/MainPage';
import PhotoUpload from './Component/page/PhotoUpload'; 

const MainTileText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App(props) {
  return (
    <BrowserRouter>
    <MainTileText>Today's Sunset</MainTileText>
    <Routes>
      <Route index element ={<MainPage />}/>

      <Route path="/photoupload" element ={<PhotoUpload/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
