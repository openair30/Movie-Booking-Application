import React, { useState, useEffect } from 'react';
import MoviesList from './MoviesList';
import moviesData from '../data/movies.json'; // Adjust the path as needed'
import './Home.css'

const Home = ({ addToHistory }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('All');
  const [selectedWeek, setSelectedWeek] = useState('All');

  useEffect(() => {
    setMovies(moviesData); // Set movies from the JSON data
  }, []);

  const filteredMovies = movies.filter(movie => {
    const monthMatch = selectedMonth === 'All' || movie.month === selectedMonth;
    const weekMatch = selectedWeek === 'All' || movie.week === parseInt(selectedWeek, 10);
    return monthMatch && weekMatch;
  });

  const bookTicket = (id, ticketsToBook) => {
    setMovies(prevMovies =>
      prevMovies.map(movie =>
        movie.id === id
          ? { ...movie, availableTickets: movie.availableTickets - ticketsToBook }
          : movie
      )
    );

    const bookedMovie = movies.find(movie => movie.id === id);
    if (bookedMovie) {
      const newBooking = {
        title: bookedMovie.title,
        tickets: ticketsToBook,
        bookedDate: new Date().toLocaleDateString(),
        bookedTime: new Date().toLocaleTimeString(),
      };
      addToHistory(newBooking);
    }
  };

  const cancelBooking = (id, ticketsToCancel) => {
    setMovies(prevMovies =>
      prevMovies.map(movie =>
        movie.id === id
          ? { ...movie, availableTickets: movie.availableTickets + ticketsToCancel }
          : movie
      )
    );
  };

  return (
    <div>
      <div>
        <select onChange={(e) => setSelectedMonth(e.target.value)} value={selectedMonth}>
          <option value="All">All Months</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>

        <select onChange={(e) => setSelectedWeek(e.target.value)} value={selectedWeek}>
          <option value="All">All Weeks</option>
          <option value="1">Week 1</option>
          <option value="2">Week 2</option>
          <option value="3">Week 3</option>
          <option value="4">Week 4</option>
        </select>
      </div>
      <MoviesList movies={filteredMovies} bookTicket={bookTicket} cancelBooking={cancelBooking} />
    </div>
  );
};

export default Home;
