import '../../App.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../ui/Button';
import Location from '../ui/Location';
import Subject from '../ui/Subject';
import Time from '../ui/Time';
import Upload from '../ui/Upload';
import Writer from '../ui/Writer';
import Text from '../ui/Text';

import Nav from '../ui/Nav';
import Footer from '../ui/footer';

function PhotoUpload(props) {
  const {} = props;

  const navigate = useNavigate();
  const[text, setText] = useState('');

  const onChange = (e) => {
      setText(e.target.value);
  };

  const onReset = () => {
      setText('');
  };

  return(
    <body class="d-flex flex-column min-vh-100">
        <Nav/>
        <section class="py-5">
          <div class="container px-4 px-lg-5 my-5">
            <Subject/>
            <Writer/>
            <Location/>
            <Time/>
            <Text/>
            <Upload/>
            <Button onClick={onChange} title={'SUBMIT'}></Button>
          </div>
        </section>
 
        <Footer/>
    </body>
    
  )
}

export default PhotoUpload;