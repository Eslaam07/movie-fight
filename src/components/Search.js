import React, { useState } from "react";
import axios from "axios";
import classes from "./Search.module.css";

const Search = (props) => {
  const [enteredMovie, setEnteredMovie] = useState("");
  const { onInput, movies, searchResults, onClick } = props;

  function inputHandler(e) {
    setEnteredMovie(e.target.value);
    onInput(e.target.value);
    onClick(true);
  }

  const [showDetails, setShowDetails] = useState(false);
  const [movieDetails, setMovieDetails] = useState([]);

  async function onMovieSelect(movie) {
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: "a9944bf1",
        i: movie.imdbID,
      },
    });
    console.log(response.data);
    setMovieDetails(response.data);
    setShowDetails(true);
  }

  console.log(movies);
  let list = movies.map((movie) => (
    <li
      key={movie.imdbID}
      onClick={() => {
        setEnteredMovie(`${movie.Title} (${movie.Year})`);
        onClick(false);
        onMovieSelect(movie);
        setMovieDetails(true);
      }}
    >
      <img src={movie.Poster} alt=""></img>
      <p>
        {movie.Title} ({movie.Year})
      </p>
    </li>
  ));

  let movieInfo = (
    <div className={classes.details}>
      <div className={classes.summary}>
        <img src={movieDetails.Poster} alt=""></img>
        <div className={classes.infotexts}>
          <h2>{movieDetails.Title}</h2>
          <h4>{movieDetails.Genre}</h4>
          <p>{movieDetails.Plot}</p>
        </div>
      </div>
      <div className={classes.otherInfo}>
        <h1>{movieDetails.Awards}</h1>
        <p>Awards</p>
      </div>
      <div className={classes.otherInfo}>
        <h1>{movieDetails.BoxOffice}</h1>
        <p>BoxOffice</p>
      </div>
      <div className={classes.otherInfo}>
        <h1>{movieDetails.Metascore}</h1>
        <p>Metascore</p>
      </div>
      <div className={classes.otherInfo}>
        <h1>{movieDetails.imdbRating}</h1>
        <p>imdbRating</p>
      </div>
      <div className={classes.otherInfo}>
        <h1>{movieDetails.imdbVotes}</h1>
        <p>imdbVotes</p>
      </div>
    </div>
  );

  return (
    <div className={classes.searchBox}>
      <label htmlFor="movie" onClick={(e) => e.stopPropagation()}>
        Search
      </label>
      <input
        id="movie"
        onChange={inputHandler}
        value={enteredMovie}
        onClick={(e) => e.stopPropagation()}
        onFocus={() => onClick(true)}
      ></input>
      {searchResults && enteredMovie && movies.length > 0 && <ul>{list}</ul>}
      {showDetails && movieInfo}
    </div>
  );
};

export default Search;
