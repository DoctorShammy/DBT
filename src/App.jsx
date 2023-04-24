// import { useState } from 'react'
// import { useHistory } from 'react-router-dom';
import React from 'react';
import './App.css'
import HomePage from './componets/HomePage/HomePage'
import Login from './componets/Login/Login';

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  // const history = useHistory();
  // const handleLogin = () => {
  //    // Logic to check if the user is authenticated
  //   // For example, you could check if the user has entered a valid username and password
  //   const isAuthenticated = true;
  //   if (isAuthenticated) {
  //     setLoggedIn(true);
  //     history.push('/home'); // Replace "/home" with the URL of your home page
  //   } else {
  //     alert('Invalid username or password'); // Display an error message if the user is not authenticated
  //   }
  // };

  return (
    <>
    <HomePage/>
   {/* {loggedIn ? (
        <HomePage />
      ) : (
        <Login onLogin={handleLogin} />
      )} */}
    </>
  );
}

export default App
