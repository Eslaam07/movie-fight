import React from "react";
import classes from "./PlaceholderTxt.module.css";

const Placeholdertxt = (props) => {
  const { inputs } = props;

  return (
    !inputs && (
      <div className={classes.temp}>
        <h3>Search for a movie on both sides.</h3>
        <p>We will tell you which is the winner!</p>
      </div>
    )
  );
};

export default Placeholdertxt;
