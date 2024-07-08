import React from 'react';
import './auth.css';

const Login = ({ username, password, setUsername, setPassword }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Logging in with username: ${username} and password: ${password}`);
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
