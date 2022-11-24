import logo from './logo.svg';
import './App.css';
import React from "react";
import styled from "styled-components";
import Nav from './Component/ui/Nav';
import Footer from './Component/ui/Footer';
import MapView from './Component/ui/MapView';
import PhotoViewPage from './Component/page/PhotoViewPage';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import MainPage from './Component/page/MainPage';
import PhotoUpload from './Component/page/PhotoUpload'; 
import background from '../src/img/placeholder.jpg';

const MainTileText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const MaxImage = styled.div`
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background:url(${background});
  background-size: cover;
`;

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element ={<PhotoViewPage/>}/>
        <Route path="/photoupload" element ={<PhotoUpload/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
