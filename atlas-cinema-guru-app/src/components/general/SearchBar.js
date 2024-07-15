import React from 'react';
import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const SearchBar = ({ title, setTitle }) => {
  const handleInput = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="search-bar">
      <div className="search-wrapper">
        <input
          type="text"
          value={title}
          onChange={handleInput}
          placeholder="Search..."
          icon={<FontAwesomeIcon icon={faSearch} style={{color: "#d3d6db",}} />}
        />
      </div>
    </div>
  );
};

export default SearchBar;
