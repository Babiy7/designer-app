import React from "react";
import classes from "./Portfolio.module.scss";
import clouds from "../../assets/images/clouds.jpg";

const Portfolio = props => {
  return (
    <div className={classes.Portfolio}>
      <div className={classes.Image}>
        <div className={classes.Husk}></div>
        <img src={clouds} alt="clouds" height="350" width="400" />
      </div>

      <div className={classes.Content}>
        <div className={classes.Category}>
          Category: {props.portfolio.category}
        </div>

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
