import React, { useState } from 'react';
import MoviesList from './MoviesList';

const Home = ({ addToHistory }) => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      availableTickets: 10,
      poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
    },
    {
      id: 2,
      title: 'Interstellar',
      availableTickets: 5,
      poster: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg',
    },
  ]);

  const bookTicket = (id, ticketsToBook) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id
          ? { ...movie, availableTickets: movie.availableTickets - ticketsToBook }
          : movie
      )
    );

    // Add booking to history
    const bookedMovie = movies.find((movie) => movie.id === id);
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
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id
          ? { ...movie, availableTickets: movie.availableTickets + ticketsToCancel }
          : movie
      )
    );
  };

  return (
    <div>
      <h1>This Week Movies</h1>
      <MoviesList movies={movies} bookTicket={bookTicket} cancelBooking={cancelBooking} />
    </div>
  );
};

export default Home;
