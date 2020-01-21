import React from "react";
import classes from "./Portfolio.module.scss";

const Portfolio = () => {
  return (
    <div className={classes.Portfolio}>
      <div className={classes.Image}></div>
      <div className={classes.Content}>
        <div className={classes.Category}>Category</div>
        <div className={classes.ProjectContent}>
          <div className={classes.Title}>Bot Admin</div>
          <time dateTime="2019-11-22 19:00" className={classes.Date}>
            2019
          </time>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
