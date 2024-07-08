import React from 'react';
import './auth.css';

const Register = ({ username, password, setUsername, setPassword }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Registering user with username: ${username} and password: ${password}`);
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

export default Register;
