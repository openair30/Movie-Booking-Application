import React, { useState } from 'react';
import MoviesList from './MoviesList';

const Home = ({ addToHistory }) => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      releaseDate: "2023-09-15", // Random Friday date
      availableTickets: 10,
      poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      week: 3,
      month: "September",
    },
    {
      id: 2,
      title: "Interstellar",
      releaseDate: "2023-10-06", // Random Friday date
      availableTickets: 5,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
      week: 1,
      month: "October",
    },
    {
      id: 3,
      title: "The Dark Knight",
      releaseDate: "2023-12-01", // Random Friday date
      availableTickets: 12,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      week: 1,
      month: "December",
    },
    {
      id: 4,
      title: "Titanic",
      releaseDate: "2023-11-10", // Random Friday date
      availableTickets: 8,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
      week: 2,
      month: "November",
    },
    {
      id: 5,
      title: "The Matrix",
      releaseDate: "2023-09-29", // Random Friday date
      availableTickets: 9,
      poster: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
      week: 4,
      month: "September",
    },
    {
      id: 6,
      title: "Avengers: Endgame",
      releaseDate: "2023-10-27", // Random Friday date
      availableTickets: 15,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      week: 4,
      month: "October",
    },
    {
      id: 7,
      title: "The Lion King",
      releaseDate: "2023-12-15", // Random Friday date
      availableTickets: 7,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
      week: 2,
      month: "December",
    },
    {
      id: 8,
      title: "The Shawshank Redemption",
      releaseDate: "2023-11-17", // Random Friday date
      availableTickets: 10,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      week: 3,
      month: "November",
    },
    {
      id: 9,
      title: "Jurassic Park",
      releaseDate: "2023-10-13", // Random Friday date
      availableTickets: 6,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9i3plLl89DHMz7mahksDaAo7HIS.jpg",
      week: 2,
      month: "October",
    },
    {
      id: 10,
      title: "Star Wars: A New Hope",
      releaseDate: "2023-09-22", // Random Friday date
      availableTickets: 14,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
      week: 3,
      month: "September",
    },
    {
      id: 11,
      title: "Spider-Man: Homecoming",
      releaseDate: "2024-11-29",
      availableTickets: 12,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
      week: 4,
      month: "November",
    },
    {
      id: 12,
      title: "Guardians of the Galaxy",
      releaseDate: "2024-10-11",
      availableTickets: 8,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
      week: 2,
      month: "October",
    },
    {
      id: 13,
      title: "Harry Potter and the Sorcerer's Stone",
      releaseDate: "2024-12-06",
      availableTickets: 10,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
      week: 1,
      month: "December",
    },
    {
      id: 14,
      title: "The Godfather",
      releaseDate: "2024-09-27",
      availableTickets: 6,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      week: 4,
      month: "September",
    },
    {
      id: 15,
      title: "Forrest Gump",
      releaseDate: "2024-11-22",
      availableTickets: 8,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h5J4W4veyxMXDMjeNxZI46TsHOb.jpg",
      week: 3,
      month: "November",
    },
    {
      id: 16,
      title: "The Avengers",
      releaseDate: "2024-10-04",
      availableTickets: 9,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
      week: 1,
      month: "October",
    },
    {
      id: 17,
      title: "Black Panther",
      releaseDate: "2024-12-13",
      availableTickets: 7,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
      week: 2,
      month: "December",
    },
    {
      id: 18,
      title: "Toy Story",
      releaseDate: "2024-09-20",
      availableTickets: 10,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
      week: 3,
      month: "September",
    },
    {
      id: 19,
      title: "Frozen",
      releaseDate: "2024-10-25",
      availableTickets: 8,
      poster: "https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg",
      week: 4,
      month: "October",
    },
    {
      id: 20,
      title: "Jaws",
      releaseDate: "2024-09-27",
      availableTickets: 7,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/s2xcqSFfT6F7ZXHxowjxfG0yisT.jpg",
      week: 4,
      month: "September",
    },
    {
      id: 21,
      title: "Pulp Fiction",
      releaseDate: "2024-11-08",
      availableTickets: 6,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tkzhI6p7ECJYNk5dBVvfcHmnBpk.jpg",
      week: 2,
      month: "November",
    },
    {
      id: 22,
      title: "Schindler's List",
      releaseDate: "2024-10-18",
      availableTickets: 7,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c8Ass7acuOe4za6DhSattE359gr.jpg",
      week: 3,
      month: "October",
    },
    {
      id: 23,
      title: "Fight Club",
      releaseDate: "2024-09-27",
      availableTickets: 10,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
      week: 4,
      month: "September",
    },
    {
      id: 24,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      releaseDate: "2024-12-06",
      availableTickets: 9,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
      week: 1,
      month: "December",
    },
    {
      id: 25,
      title: "The Silence of the Lambs",
      releaseDate: "2024-10-11",
      availableTickets: 6,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uS9m8OBWPDqxgZxlrr9QXDnZ3Fj.jpg",
      week: 2,
      month: "October",
    },
    {
      id: 26,
      title: "Saving Private Ryan",
      releaseDate: "2024-11-15",
      availableTickets: 8,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mQ93Iaf6WG4rtrJtALiRzRPaF3g.jpg",
      week: 3,
      month: "November",
    },
    {
      id: 27,
      title: "Gladiator",
      releaseDate: "2024-12-13",
      availableTickets: 7,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
      week: 2,
      month: "December",
    },
    {
      id: 28,
      title: "The Sixth Sense",
      releaseDate: "2024-10-25",
      availableTickets: 8,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fIssD3w3SvIhPPmVo4WMgZDVLID.jpg",
      week: 4,
      month: "October",
    },
    {
      id: 29,
      title: "Avatar",
      releaseDate: "2024-11-29",
      availableTickets: 9,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
      week: 4,
      month: "November",
    },
    {
      id: 30,
      title: "The Departed",
      releaseDate: "2024-09-20",
      availableTickets: 10,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jyAgiqVSx5fl0NNj7WoGGKweXrL.jpg",
      week: 3,
      month: "September",
    },
    {
      id: 31,
      title: "The Green Mile",
      releaseDate: "2024-11-01",
      availableTickets: 7,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
      week: 1,
      month: "November",
    },
    {
      id: 32,
      title: "The Prestige",
      releaseDate: "2024-12-06",
      availableTickets: 8,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg",
      week: 1,
      month: "December",
    },
    {
      id: 33,
      title: "Django Unchained",
      releaseDate: "2024-10-18",
      availableTickets: 9,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2oZklIzUbvZXXzIFzv7Hi68d6xf.jpg",
      week: 3,
      month: "October",
    },
    {
      id: 34,
      title: "The Green Mile",
      releaseDate: "1999-12-10",
      availableTickets: 8,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sOHqdY1RnSn6kcfAHKu28jvTebE.jpg",
      week: 3,
      month: "November",
    },
    {
      id: 35,
      title: "Whiplash",
      releaseDate: "2024-09-27",
      availableTickets: 5,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg",
      week: 4,
      month: "September",
    },
    {
      id: 36,
      title: "La La Land",
      releaseDate: "2024-12-13",
      availableTickets: 10,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
      week: 2,
      month: "December",
    },
    {
      id: 37,
      title: "Logan",
      releaseDate: "2024-10-11",
      availableTickets: 6,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg",
      week: 2,
      month: "October",
    },
    {
      id: 38,
      title: "Mad Max: Fury Road",
      releaseDate: "2024-11-08",
      availableTickets: 9,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
      week: 2,
      month: "November",
    },
    {
      id: 39,
      title: "The Social Network",
      releaseDate: "2024-09-20",
      availableTickets: 8,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
      week: 3,
      month: "September",
    },
    {
      id: 40,
      title: "No Country for Old Men",
      releaseDate: "2024-10-25",
      availableTickets: 7,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iXN8hzDyGmHE3MPX3a0XxgrkBaj.jpg",
      week: 4,
      month: "October",
    },
    {
      id: 41,
      title: "The Wolf of Wall Street",
      releaseDate: "2024-11-15",
      availableTickets: 8,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pWHf4khOloNVfCxscsXFj3jj6gP.jpg",
      week: 3,
      month: "November",
    },
    {
      id: 42,
      title: "The Revenant",
      releaseDate: "2024-12-06",
      availableTickets: 7,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oXUWEc5i3wYyFnL1Ycu8ppxxPvs.jpg",
      week: 1,
      month: "December",
    },
    {
      id: 43,
      title: "The Big Lebowski",
      releaseDate: "2024-11-01",
      availableTickets: 9,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5mINerUy77WywgWbjkBwbmlg2KT.jpg",
      week: 1,
      month: "November",
    },
    {
      id: 44,
      title: "Memento",
      releaseDate: "2024-10-04",
      availableTickets: 8,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fQMSaP88cf1nz4qwuNEEFtazuDM.jpg",
      week: 1,
      month: "October",
    },
    {
      id: 45,
      title: "Shutter Island",
      releaseDate: "2024-09-27",
      availableTickets: 6,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kve20tXwUZpu4GUX8l6X7Z4jmL6.jpg",
      week: 4,
      month: "September",
    },
    {
      id: 46,
      title: "Coco",
      releaseDate: "2023-10-06",
      availableTickets: 8,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
      week: 1,
      month: "October",
    },
    {
      id: 47,
      title: "Finding Nemo",
      releaseDate: "2023-11-03",
      availableTickets: 7,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",
      week: 1,
      month: "November",
    },
    {
      id: 48,
      title: "A Beautiful Mind",
      releaseDate: "2023-12-01",
      availableTickets: 9,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zwzWCmH72OSC9NA0ipoqw5Zjya8.jpg",
      week: 1,
      month: "December",
    },
    {
      id: 49,
      title: "The Incredibles",
      releaseDate: "2023-09-22",
      availableTickets: 10,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg",
      week: 4,
      month: "September",
    },
    {
      id: 50,
      title: "The Truman Show",
      releaseDate: "2023-10-13",
      availableTickets: 6,
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr8ybk9s8pgKjV-YWjuoeWGzBA5L3MMw4zlQ&s",
      week: 2,
      month: "October",
    }      
  ]);

  const [selectedMonth, setSelectedMonth] = useState('All');
  const [selectedWeek, setSelectedWeek] = useState('All');

  const filteredMovies = movies.filter(movie => {
    const monthMatch = selectedMonth === 'All' || movie.month === selectedMonth;
    const weekMatch = selectedWeek === 'All' || movie.week === parseInt(selectedWeek, 10);

    return monthMatch && weekMatch;
  });

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