import React from "react";
import classes from "./Search.module.css";

const Search = () => {
  return (
    <div className={classes.searchBox}>
      <label htmlFor="movie">Search</label>
      <input id="movie"></input>
    </div>
  );
};

export default Search;
