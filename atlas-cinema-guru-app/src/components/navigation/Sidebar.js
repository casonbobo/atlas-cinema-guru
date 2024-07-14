import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Activity from '../Activity';
import './navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faArrowRight, faFolder, faStar} from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('home');
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);

  const setPage = (pageName) => {
    setSelected(pageName);
    navigate(`/${pageName}`);
  };

  useEffect(() => {
    retrieveActivities();
  }, [retrieveActivities]);

  const handleSidebarToggle = () => {
    setIsCollapsed(prevState => !prevState);
  };

  const retrieveActivities = useCallback(async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const { data } = await axios.get('http://localhost:8000/api/activity', {
        headers: { 
          Authorization: `Bearer ${token}` }
      });
      setActivities(data.slice(0, 10));
      setShowActivities(true);
    } catch (error) {
      console.error('Error fetching activities:', error);
    }
  }, []);

  return (
    <nav
      className={`sidebar ${isCollapsed ? '' : 'open'}`}
      onMouseEnter={handleSidebarToggle}
      onMouseLeave={handleSidebarToggle}
    >
      <ul className="sidebar-nav">
        <li
          className={`nav-item ${selected === 'Home' ? 'Selected' : ''}`}
          onClick={() => setPage('Home')}
        >
          <FontAwesomeIcon className="icon" icon={faFolder} />
          {!isCollapsed && <span>Home</span>}
          <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
        </li>
        <li
          className={`nav-item ${selected === 'Favorites' ? 'Selected' : ''}`}
          onClick={() => setPage('Favorites')}
        >
          <FontAwesomeIcon className="icon" icon={faStar} />
          {!isCollapsed && <span>Favorites</span>}
          <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
        </li>
        <li
          className={`nav-item ${selected === 'Watchlater' ? 'Selected' : ''}`}
          onClick={() => setPage('Watchlater')}
        >
          <FontAwesomeIcon className="icon" icon={faClock} />
          {!isCollapsed && <span>Watch Later</span>}
          <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
        </li>
      </ul>
      {showActivities && (
        <ul className="sidebar-activities">
          {activities.slice(0, 10).map((activity, index) => (
            <Activity
                key={index}
                userUsername={activity.userUsername}
                title={activity.title}
                date={activity.date}
              />          
          ))}
        </ul>
      )}
    </nav>
  );
};

export default SideBar;
