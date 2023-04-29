import React from 'react';
import Logo from "/src/img/Logo.jpg"
import "./HomePage.css"
import {Route, Link  } from 'react-router-dom';
import Kryssblad from '../Kryssblad/Kryssblad';

function HomePage(){

    return(
    <div className="homepage">
      <div className="header">
        <img src={Logo} alt="My App Logo" className="logo" />

        <hr/>
        <div>
          <p>Text här</p>
        </div>
        <div>
          <p>Text här</p>
        </div>
        <div>
          <p>Text här</p>
        </div>
        <div className="buttonbox">
        <div>
            <Link to= "/kryssblad" className="buttonOne">
              Kryssblad
              </Link>
        </div>
        <div>
            <Link to= "/veckokort" className="buttonOne">
              Veckokort
              </Link>
        </div>
        <div>
            <Link to= "/test" className="buttonOne">
              Test
              </Link>
        </div>
        </div>
      </div>
      </div>
    );
}

export default HomePage;