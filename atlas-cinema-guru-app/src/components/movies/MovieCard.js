import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid, faClock as faClockSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular, faClock as faClockRegular } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import './movies.css';
import Tag from './Tag'


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
      const accessToken = localStorage.getItem('accessToken');
      const isCurrentlySelected = type === 'favorite' ? isFavorite : isWatchLater;
      const method = isCurrentlySelected ? 'delete' : 'post';
      const url = `http://localhost:8000/api/titles/${type}/${movie.imdbId}`;

      await axios({
        method: method,
        url: url,
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },

        data: { imdbId: movie.imdbId }
      });
      if (type === 'favorite') {
        setIsFavorite(!isFavorite);
      } else {
        setIsWatchLater(!isWatchLater);
      }
    } catch (error) {
      console.error(`Error updating ${type}:`, error);
    }
  };

  return (
    <li className='movie-card-li'>
      <div>
          <FontAwesomeIcon icon={isFavorite ? faStarSolid : faStarRegular} onClick={() => handleClick('favorite')} />
          <FontAwesomeIcon icon={isWatchLater ? faClockSolid : faClockRegular} onClick={() => handleClick('watchlater')} />
      </div>
      <div className = "movie-card-info">
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <ul className="tag">
            {movie.genres.map((genre) => (
              <Tag key={genre} genre={genre}/>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default MovieCard;
