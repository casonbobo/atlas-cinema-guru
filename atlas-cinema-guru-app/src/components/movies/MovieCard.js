import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid, faClock as faClockSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular, faClock as faClockRegular } from '@fortawesome/free-regular-svg-icons';
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
    const endpoint = `http://localhost:8000/api/titles/${type}/${movie.imdbID}`;
    try {
      if ((type === 'favorite' && !isFavorite) || (type === 'watchlater' && !isWatchLater)) {
        await axios.post(endpoint, {}, header);
      } else {
        await axios.delete(endpoint, header);
      }

      if (type === 'favorite') {
        setIsFavorite(!isFavorite);
      } else if (type === 'watchlater') {
        setIsWatchLater(!isWatchLater);
      }
    } catch (error) {
      console.error(`Error updating ${type} status:`, error);
    }
  };

  return (
    <li className='movie-card-li'>
      <div>
          <FontAwesomeIcon icon={isFavorite ? faStar : faStarRegular} onClick={() => handleClick('favorite')} />
          <FontAwesomeIcon icon={isWatchLater ? faClockRegular : faClock} onClick={() => handleClick('watchlater')} />
      </div>
      <div className = "movie-card-info">
        <img src={imageLoaded ? movie.imageurls : placeHolderImage} alt={movie.title} onError={handleImageError} />
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{truncateText(movie.synopsis, 100)}</p>
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
