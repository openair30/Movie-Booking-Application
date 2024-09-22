import React, { useState } from 'react';
import MoviesList from './MoviesList';

const Home = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: 'Inception',
            availableTickets: 0,
            poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
        },
        {
            id: 2,
            title: 'Interstellar',
            availableTickets: 1,
            poster: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg',
        },
        {
            id: 3,
            title: 'Inception',
            availableTickets: 2,
            poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
        },
        {
            id: 4,
            title: 'Interstellar',
            availableTickets: 3,
            poster: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg',
        },
        {
            id: 5,
            title: 'Inception',
            availableTickets: 4,
            poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
        },
        {
            id: 6,
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
