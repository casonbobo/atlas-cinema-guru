import React from 'react';
import './components.css';

function Activity ({userUsername, title, date}) {

  return (
    <li className="activity">
      <p>
        <span className='activity'>{userUsername}</span>
        <span className='activity'>{title}</span>
        <span className='activity-date'>{date}</span>
      </p>
    </li>
  );
};

export default Activity;
