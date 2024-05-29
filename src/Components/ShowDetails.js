import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './ShowDetails.css';

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`)
      .then(response => {
        setShow(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the show details!', error);
      });
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className="show-details">
      <h1>{show.name}</h1>
      <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
      <Link to={`/book/${show.id}`}>
        <button>Book Ticket</button>
      </Link>
    </div>
  );
};

export default ShowDetails;
