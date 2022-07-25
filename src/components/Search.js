import React from "react";
import classes from "./Search.module.css";

const Search = (props) => {
  function inputHandler(e) {
    props.onInput(e.target.value);
  }
  return (
    <div className={classes.searchBox}>
      <label htmlFor="movie">Search</label>
      <input id="movie" onInput={inputHandler}></input>
    </div>
  );
};

export default Search;
