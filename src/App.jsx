import React from 'react';
import './App.css'
import HomePage from './componets/HomePage/HomePage'
import {Route, Routes } from 'react-router-dom';
import Kryssblad from './componets/Kryssblad/Kryssblad';



function App() {

  return (
    <>
  <Routes>
    <Route path="/" element ={<HomePage/>} />
    <Route path="/kryssblad" element ={<Kryssblad/>} />  
  </Routes>
    </>
  );
}

export default App
