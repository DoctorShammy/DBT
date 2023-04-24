import React from 'react';
import './App.css'
import HomePage from './componets/HomePage/HomePage'
import Login from './componets/Login/Login';

function App() {
  

  return (
    <>
    <HomePage/>
    <article className="buttonBox">
        <Login>Logga In</Login>
      </article>
  
    </>
  );
}

export default App
