import React from 'react';
import './navigation.css';

const Header = ({ userUsername, setIsLoggedIn }) => {
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  };

  return (
    <nav className="header">
      <img src="https://picsum.photos/100/100" alt="User Avatar" />
      <p>Welcome, {userUsername}</p>
      <span onClick={handleLogout}>
        <i className="fas fa-sign-out-alt"></i> Logout
      </span>
    </nav>
  );
};

export default Header;
