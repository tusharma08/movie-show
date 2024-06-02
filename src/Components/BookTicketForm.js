import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './BookTicketForm.css';

const BookTicketForm = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    movieName: '',
  });

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`)
      .then(response => {
        setShow(response.data);
        setUserDetails({
          ...userDetails,
          movieName: response.data.name
        });
      })
      .catch(error => {
        console.error('There was an error fetching the show details!', error);
      });
  }, [id]);

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    alert('Ticket booked successfully!');
  };

  if (!show) {
    return <div>Loading...</div>;
  }

  

  return (
    <form onSubmit={handleSubmit} className="book-ticket-form">
      <h2>Book Ticket for {show.name}</h2>
      <div>
        <label>
          Name:
          <input type="text" name="name" value={userDetails.name} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" name="email" value={userDetails.email} onChange={handleChange} required />
        </label>
      </div>
      <button type="submit">Book</button>
    </form>
  );
};

export default BookTicketForm;
