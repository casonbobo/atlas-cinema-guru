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
    <li className='movie-card-li'>
      {isFavortie ?
        <FontAwesomeIcon icon={faStarSolid} className='card-icon' onClick={() => handleClick('favorite')} />
        :
        <FontAwesomeIcon icon={faStarRegular} className='card-icon' onClick={() => handleClick('favorite')} /> 
        }

    </li>
  );
};

export default MovieCard;
