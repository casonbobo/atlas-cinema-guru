import React from 'react';
import './general.css';

const SelectInput = ({ label, options, className, value, setValue }) => {
  const handleSelect = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={`input-container ${className}`}>
      {label && <label>{label}</label>}
      <select value={value} onChange={handleSelect}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
