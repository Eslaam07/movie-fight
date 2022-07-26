import React, { useState } from "react";
import classes from "./Search.module.css";

const Search = (props) => {
  const [enteredMovie, setEnteredMovie] = useState("");
  const { onInput, movies, searchResults, onClick } = props;
  function inputHandler(e) {
    setEnteredMovie(e.target.value);
    onInput(e.target.value);
    onClick(true);
  }

  console.log(movies);
  let list = movies.map((movie) => (
    <li
      key={movie.imdbID}
      onClick={() => {
        setEnteredMovie(`${movie.Title} (${movie.Year})`);
        onClick(false);
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
    </div>
  );
};

export default Search;
