import React from "react";
import classes from "./PlaceholderTxt.module.css";

const Placeholdertxt = (props) => {
  const { inputs } = props;

  return (
    !inputs && (
      <div className={classes.temp}>
        <h3>Search for a movie on both sides.</h3>
        <p>We will bring the stats of each to give you a chance to compare.</p>
      </div>
    )
  );
};

export default Placeholdertxt;
