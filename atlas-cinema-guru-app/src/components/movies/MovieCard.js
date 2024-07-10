import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './movies.css';

const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  useEffect(() => {
    const fetchFavoriteStatus = async () => {
      try {
        const response = await axios.get(`/api/titles/favorite/${movie.imdbId}`);
        setIsFavorite(response.data.exists);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchWatchLaterStatus = async () => {
      try {
        const response = await axios.get(`/api/titles/watchlater/${movie.imdbId}`);
        setIsWatchLater(response.data.exists);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFavoriteStatus();
    fetchWatchLaterStatus();
  }, [movie.imdbId]);

  const handleClick = async (type) => {
    try {
      if (type === 'favorite') {
        if (isFavorite) {
          await axios.delete(`/api/titles/favorite/${movie.imdbId}`);
          setIsFavorite(false);
        } else {
          await axios.post(`/api/titles/favorite/${movie.imdbId}`);
          setIsFavorite(true);
        }
      } else if (type === 'watchlater') {
        if (isWatchLater) {
          await axios.delete(`/api/titles/watchlater/${movie.imdbId}`);
          setIsWatchLater(false);
        } else {
          await axios.post(`/api/titles/watchlater/${movie.imdbId}`);
          setIsWatchLater(true);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <li>
      <FontAwesomeIcon
        icon={faStar}
        color={isFavorite ? 'gold' : 'gray'}
        onClick={() => handleClick('favorite')}
      />
      <FontAwesomeIcon
        icon={faPlus}
        color={isWatchLater ? 'blue' : 'gray'}
        onClick={() => handleClick('watchlater')}
      />
      <h2>{movie.title}</h2>
      <p>{movie.synopsis}</p>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </li>
  );
};

export default MovieCard;
