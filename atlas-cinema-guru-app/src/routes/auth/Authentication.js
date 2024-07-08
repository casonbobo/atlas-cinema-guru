import React, { useState } from 'react';
import './auth.css';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    setIsLoggedIn(true);
    setUserUsername(username);
  };

  const handleSignUp = () => {
    setIsLoggedIn(false);
    setUserUsername('');
  };

  return (
    <form>
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
