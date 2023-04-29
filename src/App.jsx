import React from 'react';
import './App.css'
import HomePage from './componets/HomePage/HomePage'
import {Route, Routes } from 'react-router-dom';
import Kryssblad from './componets/Kryssblad/Kryssblad';
import Test from './componets/Kryssblad/Test';
import { Veckokort } from './componets/Veckokort/Veckokort';



function App() {

  return (
    <>
  <Routes>
    <Route path="/" element ={<HomePage/>} />
    <Route path="/kryssblad" element ={<Kryssblad/>} />  
    {/* <Route path="/veckokort" element ={<Veckokort/>} /> */}
    <Route path= "/test" element= {<Test />} />
  </Routes>
    </>
  );
}

export default App
