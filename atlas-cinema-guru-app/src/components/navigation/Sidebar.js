// src/components/navigation/SideBar.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Activity from '../Activity';
import './navigation.css';

const SideBar = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('home');
  const [small, setSmall] = useState(true);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);

  const setPage = (pageName) => {
    setSelected(pageName);
    navigate(`/${pageName.toLowerCase()}`);
  };

  useEffect(() => {
    axios.get('/api/activity')
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        console.error('Error fetching activities:', error);
      });
  }, []);

  return (
    <nav className="sidebar">
      <ul className="sidebar-nav">
        <li
          className={`sidebar-nav-item ${selected === 'home' ? 'selected' : ''}`}
          onClick={() => setPage('Home')}
        >
          <span className="sidebar-nav-icon">Home Icon</span>
          <span>Home</span>
        </li>
        <li
          className={`sidebar-nav-item ${selected === 'favorites' ? 'selected' : ''}`}
          onClick={() => setPage('Favorites')}
        >
          <span className="sidebar-nav-icon">Favorites Icon</span>
          <span>Favorites</span>
        </li>
        <li
          className={`sidebar-nav-item ${selected === 'watchlater' ? 'selected' : ''}`}
          onClick={() => setPage('Watch Later')}
        >
          <span className="sidebar-nav-icon">Watch Later Icon</span>
          <span>Watch Later</span>
        </li>
      </ul>
      {showActivities && (
        <ul className="sidebar-activities">
          {activities.slice(0, 10).map((activity) => (
            <Activity key={activity.id} activity={activity} />
          ))}
        </ul>
      )}
    </nav>
  );
};

export default SideBar;
