import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../../components/movies/MovieCard';
import './dashboard.css';

const WatchLater = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchWatchLater = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/titles/watchlater/');
        setMovies(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWatchLater();
  }, []);

  return (
    <div className="dashboard-watchlater">
      <h1>Movies you want to watch later</h1>
      <ul>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default WatchLater;
