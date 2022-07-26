import React, { useState } from "react";
import axios from "axios";
import classes from "./Search.module.css";
import MovieInfo from "./MovieInfo";

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
    setMovieDetails(response.data);
    setShowDetails(true);
  }

  let list = movies.map((movie) => (
    <li
      key={movie.imdbID}
      onClick={() => {
        setEnteredMovie("");
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
      {showDetails && <MovieInfo movieDetails={movieDetails} />}
    </div>
  );
};

export default Search;
