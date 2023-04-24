import { useState } from 'react';
import React from 'react';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleLoginClick = (event) => {
      event.preventDefault();
      onLogin();
    };
  
    return (
      <div className="login-page">
        <h1>Logga In</h1>
        <form>
          <label>
            Användarnamn:
            <input type="text" value={username} onChange={handleUsernameChange} />
          </label>
          <label>
            Lösenord:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <button onClick={handleLoginClick}>Logga In</button>
        </form>
      </div>
    );
  }
  
  export default Login;