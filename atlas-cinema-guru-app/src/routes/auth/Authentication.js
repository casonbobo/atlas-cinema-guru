import React, { useState } from 'react';
import axios from 'axios';
import './auth.css';
import Button from '../../components/general/Button';

  const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [_switch, setSwitch] = useState(true);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
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
        <Button
          label="Sign In"
          type="button"
          className={_switch ? "light-red" : "dark-red"}
          onClick={() => setSwitch(true)}
        />
        <Button
          label="Sign Up"
          type="button"
          className={_switch ? "dark-red" : "light-red"}
          onClick={() => setSwitch(false)}
        />
      </form>
    );
};

export default Authentication;
