import React from "react";
import classes from "./Search.module.css";

const Search = (props) => {
  const { onInput, movies, searchResults } = props;
  function inputHandler(e) {
    onInput(e.target.value);
  }

  console.log(movies);
  let list = movies.map((movie) => (
    <li key={movie.imdbID}>
      <img src={movie.Poster} alt=""></img>
      <p>
        {movie.Title} ({movie.Year})
      </p>
    </li>
  ));

  return (
    <div className={classes.searchBox} onClick={(e) => e.stopPropagation()}>
      <label htmlFor="movie">Search</label>
      <input id="movie" onInput={inputHandler}></input>
      {searchResults && movies.length > 0 && <ul>{list}</ul>}
    </div>
  );
};

export default Search;
