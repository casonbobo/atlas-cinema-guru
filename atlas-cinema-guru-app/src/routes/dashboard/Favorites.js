import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../../components/movies/MovieCard';
import './dashboard.css';

const Favorites = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/titles/favorite');
        setMovies(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFavorites();
  }, []);

  return (
    <div className="dashboard-favorites">
      <h1>Movies you like</h1>
        <div className='favMovies'>
          {movies.map((movie) => (
            <MovieCard key={movie.imdbId} movie={movie} />
          ))}
        </div>
    </div>
  );
};

export default Favorites;
