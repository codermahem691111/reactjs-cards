import logo from './logo.svg';
import React, { Component, useEffect, useRef } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Img1 from './images/halloport.gif'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hallo from './components/Hallo';
function App() {


  return (

    <div className='App'>
     <Hallo></Hallo>   
    </div>


  );
}

export default App;