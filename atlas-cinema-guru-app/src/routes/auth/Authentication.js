import React, { useState } from 'react';
import axios from 'axios';
import './auth.css';
import Button from '../../components/general/Button';
import Login from './Login';
import Register from './Register';

  const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
    const [error, setError] = useState("");
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [_switch, setSwitch] = useState(true);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      if (!username.trim() || !password.trim()) {
        setError("Username and password are required.");
        return;
      }

      const endpoint = _switch ? 'http://localhost:8000/api/auth/login' : 'http://localhost:8000/api/auth/register';
      console.log({ username, password });
      try {
        const response = await axios.post(endpoint, { username, password });
        const { accessToken } = response.data;
        if (accessToken) {
          localStorage.setItem('accessToken', accessToken);
          console.log(typeof setUserUsername);
          setUserUsername(username);
          setIsLoggedIn(true);
        }
      } catch (error) {
        const errorMessage = error.response && error.response.data && error.response.data.message
                        ? error.response.data.message : error.message;
        setError(errorMessage);
        console.error('Authentication error:', errorMessage);
        }
    };

    return (
      <form className="authentication" onSubmit={handleSubmit}>
        <div className="toggle-auth">
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
        </div>
        {_switch ? (
          <Login
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        ) : (
          <Register
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        )}
        {error && <div className="error-message">{error}</div>}
      </form>
    )
  }

export default Authentication;
