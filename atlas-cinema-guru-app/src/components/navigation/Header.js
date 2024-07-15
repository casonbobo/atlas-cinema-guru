import React from 'react'
import './navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const Header = ({ userUsername, setIsLoggedIn }) => {
  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  };

  return (
    <nav className="header-nav">
      <div className="header-title">
        <p>Cinema Guru</p>
      </div>
      <div className="user-options">
        <img src="https://picsum.photos/100/100" alt="User" />
        <p>Welcome, {userUsername}!</p>
        <span className="logout" onClick={logout}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <p>Logout</p>
        </span>
      </div>
    </nav>
  )
}

export default Header;
