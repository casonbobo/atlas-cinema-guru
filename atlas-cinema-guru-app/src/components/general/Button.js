import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './general.css';

const Button = ({ label, className, onClick, icon }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
