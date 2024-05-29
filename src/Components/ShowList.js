import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ShowList.css';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => {
        setShows(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the shows!', error);
      });
  }, []);

  return (
    <div className="show-list">
      <h1>TV Shows</h1>
      <ul>
        {shows.map(item => (
          <li key={item.show.id} className="show-item">
            <Link to={`/show/${item.show.id}`}>
              <h2>{item.show.name}</h2>
            </Link>
            <p>{item.show.genres.join(', ')}</p>
            {item.show.image && <img src={item.show.image.medium} alt={item.show.name} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
