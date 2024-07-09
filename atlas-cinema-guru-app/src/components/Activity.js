
import React from 'react';
import './components.css';

const Activity = ({ activity }) => {
  const formattedSentence = `You ${activity.verb} ${activity.object} on ${activity.date}`;

  return (
    <li className="activity">
      <p className="activity-description">{formattedSentence}</p>
      {

        
      }
    </li>
  );
};

export default Activity;
