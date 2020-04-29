import React from "react";
import classes from "./ProgressBar.module.scss";

const ProgressBar = props => {
  return (
    <div className={classes.ProgressBar}>
      <div className={classes.Title}>{props.title}</div>
      <div className={classes.Container}>
        <div
          className={classes.Progress}
          style={{ width: `${props.percent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
