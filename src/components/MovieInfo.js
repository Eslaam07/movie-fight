import React from "react";
import classes from "./MovieInfo.module.css";

const MovieInfo = (props) => {
  const { movieDetails } = props;

  return (
    <div className={classes.details}>
      <div className={classes.summary}>
        <img src={movieDetails.Poster} alt=""></img>
        <div className={classes.infotexts}>
          <h2>
            {movieDetails.Title} ({movieDetails.Year})
          </h2>
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
        <p>IMDB Rating</p>
      </div>
      <div className={classes.otherInfo}>
        <h1>{movieDetails.imdbVotes}</h1>
        <p>IMDB Votes</p>
      </div>
    </div>
  );
};

export default MovieInfo;
