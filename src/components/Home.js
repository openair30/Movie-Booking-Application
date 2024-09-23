import React, { useState } from 'react';
import MoviesList from './MoviesList';

const Home = ({ addToHistory }) => {
  const [movies, setMovies] = useState([
      {
        id: 1,
        title: "Inception",
        releaseDate: "2010-07-16",
        availableTickets: 10,
        poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      },
      {
        id: 2,
        title: "Interstellar",
        releaseDate: "2014-11-07",
        availableTickets: 5,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
      },
      {
        id: 3,
        title: "The Dark Knight",
        releaseDate: "2008-07-18",
        availableTickets: 12,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      },
      {
        id: 4,
        title: "Titanic",
        releaseDate: "1997-12-19",
        availableTickets: 8,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
      },
      {
        id: 5,
        title: "The Matrix",
        releaseDate: "1999-03-31",
        availableTickets: 9,
        poster: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
      },
      {
        id: 6,
        title: "Avengers: Endgame",
        releaseDate: "2019-04-26",
        availableTickets: 15,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      },
      {
        id: 7,
        title: "The Lion King",
        releaseDate: "1994-06-24",
        availableTickets: 7,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
      },
      {
        id: 8,
        title: "The Shawshank Redemption",
        releaseDate: "1994-09-23",
        availableTickets: 10,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      },
      {
        id: 9,
        title: "Jurassic Park",
        releaseDate: "1993-06-11",
        availableTickets: 6,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9i3plLl89DHMz7mahksDaAo7HIS.jpg",
      },
      {
        id: 10,
        title: "Star Wars: A New Hope",
        releaseDate: "1977-05-25",
        availableTickets: 14,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
      },
      {
        id: 11,
        title: "Spider-Man: Homecoming",
        releaseDate: "2017-07-07",
        availableTickets: 12,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
      },
      {
        id: 12,
        title: "Guardians of the Galaxy",
        releaseDate: "2014-08-01",
        availableTickets: 8,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
      },
      {
        id: 13,
        title: "Harry Potter and the Sorcerer's Stone",
        releaseDate: "2001-11-16",
        availableTickets: 10,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
      },
      {
        id: 14,
        title: "The Godfather",
        releaseDate: "1972-03-24",
        availableTickets: 6,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      },
      {
        id: 15,
        title: "Forrest Gump",
        releaseDate: "1994-07-06",
        availableTickets: 8,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h5J4W4veyxMXDMjeNxZI46TsHOb.jpg",
      },
      {
        id: 16,
        title: "The Avengers",
        releaseDate: "2012-05-04",
        availableTickets: 9,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
      },
      {
        id: 17,
        title: "Black Panther",
        releaseDate: "2018-02-16",
        availableTickets: 7,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
      },
      {
        id: 18,
        title: "Toy Story",
        releaseDate: "1995-11-22",
        availableTickets: 10,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
      },
      {
        id: 19,
        title: "Frozen",
        releaseDate: "2013-11-27",
        availableTickets: 8,
        poster: "https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg",
      },
      {
        id: 20,
        title: "Jaws",
        releaseDate: "1975-06-20",
        availableTickets: 7,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/s2xcqSFfT6F7ZXHxowjxfG0yisT.jpg",
      },
      {
        id: 21,
        title: "Shrek",
        releaseDate: "2001-05-18",
        availableTickets: 8,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg",
      },
      {
        id: 22,
        title: "Iron Man",
        releaseDate: "2008-05-02",
        availableTickets: 6,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
      },
      {
        id: 23,
        title: "Avatar",
        releaseDate: "2009-12-18",
        availableTickets: 10,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg",
      },
      {
        id: 24,
        title: "Pirates of the Caribbean: The Curse of the Black Pearl",
        releaseDate: "2003-07-09",
        availableTickets: 9,
        poster: "https://lumiere-a.akamaihd.net/v1/images/p_piratesofthecaribbean_thecurseoftheblackpearl_19642_d1ba8e66.jpeg",
      },
      {
        id: 25,
        title: "The Hunger Games",
        releaseDate: "2012-03-23",
        availableTickets: 5,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg",
      },
      {
        id: 26,
        title: "Mad Max: Fury Road",
        releaseDate: "2015-05-15",
        availableTickets: 7,
        poster: "https://static0.srcdn.com/wordpress/wp-content/uploads/2023/05/mad-max-fury-road-poster.jpeg",
      },
      {
        id: 27,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        releaseDate: "2001-12-19",
        availableTickets: 6,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/56zTpe2xvaA4alU51sRWPoKPYZy.jpg",
      },
      {
        id: 28,
        title: "The Terminator",
        releaseDate: "1984-10-26",
        availableTickets: 8,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
      },
      {
        id: 29,
        title: "Rocky",
        releaseDate: "1976-12-03",
        availableTickets: 7,
        poster: "https://m.media-amazon.com/images/M/MV5BNTBkMjg2MjYtYTZjOS00ODQ0LTg0MDEtM2FiNmJmOGU1NGEwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
      },
      {
        id: 30,
        title: "The Silence of the Lambs",
        releaseDate: "1991-02-14",
        availableTickets: 9,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg",
      },
      {
        id: 31,
        title: "Gladiator",
        releaseDate: "2000-05-05",
        availableTickets: 10,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
      },
      {
        id: 32,
        title: "The Sixth Sense",
        releaseDate: "1999-08-06",
        availableTickets: 6,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fIssD3w3SvIhPPmVo4WMgZDVLID.jpg",
      },
      {
        id: 33,
        title: "Pulp Fiction",
        releaseDate: "1994-10-14",
        availableTickets: 10,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
      },
      {
        id: 34,
        title: "The Green Mile",
        releaseDate: "1999-12-10",
        availableTickets: 8,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sOHqdY1RnSn6kcfAHKu28jvTebE.jpg",
      },
      {
        id: 35,
        title: "Schindler's List",
        releaseDate: "1993-12-15",
        availableTickets: 7,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c8Ass7acuOe4za6DhSattE359gr.jpg",
      },
      {
        id: 36,
        title: "Fight Club",
        releaseDate: "1999-10-15",
        availableTickets: 9,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8kNruSfhk5IoE4eZOc4UpvDn6tq.jpg",
      },
      {
        id: 37,
        title: "Back to the Future",
        releaseDate: "1985-07-03",
        availableTickets: 11,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pTpxQB1N0waaSc3OSn0e9oc8kx9.jpg",
      },
      {
        id: 38,
        title: "Indiana Jones: Raiders of the Lost Ark",
        releaseDate: "1981-06-12",
        availableTickets: 7,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/44sKJOGP3fTm4QXBcIuqu0RkdP7.jpg",
      },
      {
        id: 39,
        title: "The Wolf of Wall Street",
        releaseDate: "2013-12-25",
        availableTickets: 5,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sOxr33wnRuKazR9ClHek73T8qnK.jpg",
      },
      {
        id: 40,
        title: "Goodfellas",
        releaseDate: "1990-09-19",
        availableTickets: 6,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
      },
      {
        id: 41,
        title: "Braveheart",
        releaseDate: "1995-05-24",
        availableTickets: 8,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/or1gBugydmjToAEq7OZY0owwFk.jpg",
      },
      {
        id: 42,
        title: "The Revenant",
        releaseDate: "2015-12-25",
        availableTickets: 7,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oXUWEc5i3wYyFnL1Ycu8ppxxPvs.jpg",
      },
      {
        id: 43,
        title: "Whiplash",
        releaseDate: "2014-10-10",
        availableTickets: 5,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg",
      },
      {
        id: 44,
        title: "The Pianist",
        releaseDate: "2002-09-17",
        availableTickets: 10,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2hFZwMyZq89d7rBlaLJdXKzEXgR.jpg",
      },
      {
        id: 45,
        title: "Deadpool",
        releaseDate: "2016-02-12",
        availableTickets: 9,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg",
      },
      {
        id: 46,
        title: "Coco",
        releaseDate: "2017-11-22",
        availableTickets: 8,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
      },
      {
        id: 47,
        title: "Finding Nemo",
        releaseDate: "2003-05-30",
        availableTickets: 7,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",
      },
      {
        id: 48,
        title: "A Beautiful Mind",
        releaseDate: "2001-12-11",
        availableTickets: 9,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zwzWCmH72OSC9NA0ipoqw5Zjya8.jpg",
      },
      {
        id: 49,
        title: "The Incredibles",
        releaseDate: "2004-11-05",
        availableTickets: 10,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg",
      },
      {
        id: 50,
        title: "The Truman Show",
        releaseDate: "1998-06-05",
        availableTickets: 6,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gRZKzAA67E9HeEF1AUZYCRe1xPl.jpg",
      }
    
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
