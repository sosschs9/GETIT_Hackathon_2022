import '../../App.css';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

import Button from '../ui/Button';
import Location from '../ui/Location';
import Subject from '../ui/Subject';
import Time from '../ui/Time';
import Upload from '../ui/Upload';
import Writer from '../ui/Writer';
import Text from '../ui/Text';

import Nav from '../ui/Nav';
import Footer from '../ui/footer';

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

const TitleText = styled.p`
    font-size: 28px;
    font-weight: 500;
`;

function PhotoUpload(props) {
  const {} = props;
  const[text, setText] = useState('');
  const navigate = useNavigate();

  const onChange = (e) => {
      setText(e.target.value);
  };

  return(
    <body class="d-flex flex-column min-vh-100">
        <Nav/>
        <Wrapper>
          <Container>
            <TitleText>당신의 감정과 사진을 여기에 기록해보세요.</TitleText>
            <div class="container px-4 px-lg-5 my-5">  
              <Subject>line-height = 10px</Subject>
              <Writer>line-height = 10px</Writer> 
              <Location>line-height = 10px</Location>
              <Time/>
              <Text/>
              <Upload/>
              <Button onClick={() => {
                                    navigate("/");
                              }} title={'SUBMIT'}></Button>
            </div>
          </Container>
        </Wrapper>

 
        <Footer/>
    </body>
    
  )
}

export default PhotoUpload;