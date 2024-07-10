import React, { useState } from 'react';
import axios from 'axios';
import './auth.css';


  const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [_switch, setSwitch] = useState(true);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
    const handleSignIn = () => {
      setIsLoggedIn(true);
      setUserUsername(username);
    };
  
    const handleSignUp = () => {
      setIsLoggedIn(false);
      setUserUsername('');
    };

      try {
        if (_switch) {
          const response = await axios.post('/api/auth/login', {
            username,
            password,
          });
  
          localStorage.setItem('accessToken', response.data.token);
          setUserUsername(username);
          setIsLoggedIn(true);
        } else {
          const response = await axios.post('/api/auth/register', {
            username,
            password,
          });
  
          localStorage.setItem('accessToken', response.data.token);
          setUserUsername(username);
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleSignIn}>
          Sign In
        </button>
        <button type="button" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
    );
};

export default Authentication;
