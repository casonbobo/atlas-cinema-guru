import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from './routes/dashboard/Dashboard';
import Authentication from './routes/auth/Authentication';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      axios
        .post('/api/auth/', {}, { headers: { Authorization: `Bearer ${accessToken}` } })
        .then((response) => {
          setIsLoggedIn(true);
          setUserUsername(response.data.username);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard userUsername={userUsername} />
      ) : (
        <Authentication />
      )}
    </div>
  );
};

export default App;
