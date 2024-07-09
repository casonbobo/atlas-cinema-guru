import React from 'react';
import SearchBar from './SearchBar';
import Input from './Input';
import SelectInput from './SelectInput';
import Tag from './Tag';
import './movies.css';

const Filter = ({
  minYear,
  setMinYear,
  maxYear,
  setMaxYear,
  sort,
  setSort,
  genres,
  setGenres,
  title,
  setTitle,
}) => {
  const sortingOptions = [
    { value: 'latest', label: 'Latest' },
    { value: 'oldest', label: 'Oldest' },
    { value: 'highestrated', label: 'Highest Rated' },
    { value: 'lowestrated', label: 'Lowest Rated' },
  ];

  const genreTags = ['action', 'drama', 'comedy', 'biography', 
                     'romance', 'thriller', 'war', 'history', 'sport', 
                     'sci-fi', 'documentary', 'crime', 'fantasy'];

  return (
    <div className="filter">
      <SearchBar title={title} setTitle={setTitle} />
      <div className="filter-inputs">
        <Input type="number" value={minYear} onChange={(e) => setMinYear(Number(e.target.value))} placeholder="Min Year" />
        <Input type="number" value={maxYear} onChange={(e) => setMaxYear(Number(e.target.value))} placeholder="Max Year" />
      </div>
      <SelectInput value={sort} onChange={(e) => setSort(e.target.value)} options={sortingOptions} />
      <div className="filter-tags">
        {genreTags.map((genre) => (
          <Tag key={genre} genre={genre} filter genres={genres} setGenres />
        ))}
      </div>
    </div>
  );
};

export default Filter;
