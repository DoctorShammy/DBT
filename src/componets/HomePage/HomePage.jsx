import React from 'react';
import Logo from "/src/img/Logo.jpg"
import "./HomePage.css"

function HomePage(){

    return(
    <div className="homepage">
      <div className="header">
        <img src={Logo} alt="My App Logo" className="logo" />
        {/* <button className="search-button">Search</button> */}
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
      </div>
      </div>
    );
}

export default HomePage;