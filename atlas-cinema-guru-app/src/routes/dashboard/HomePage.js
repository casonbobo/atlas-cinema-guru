import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../../components/movies/MovieCard';
import Filter from '../../components/movies/Filter';
import Button from '../../components/Button';
import './dashboard.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState('');
  const [title, setTitle] = useState('');
  const [page, setPage] = useState(1);

  const loadMovies = async (page) => {
    try {
      const response = await axios.get('/api/titles/advancedsearch', {
        params: {
          minYear,
          maxYear,
          genres,
          title,
          sort,
          page,
        },
      });
      setMovies((prevMovies) => [...prevMovies, ...response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadMovies(page);
  }, [minYear, maxYear, genres, sort, title, page]);

  return (
    <div className="dashboard-homepage">
      <Filter
        minYear={minYear}
        setMinYear={setMinYear}
        maxYear={maxYear}
        setMaxYear={setMaxYear}
        genres={genres}
        setGenres={setGenres}
        sort={sort}
        setSort={setSort}
        title={title}
        setTitle={setTitle}
      />
      <ul>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </ul>
      <Button onClick={() => setPage((prevPage) => prevPage + 1)}>Load More..</Button>
    </div>
  );
};

export default HomePage;
