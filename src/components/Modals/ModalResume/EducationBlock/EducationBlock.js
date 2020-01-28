import React from "react";
import classes from "./EducationBlock.module.scss";

const EducationBlock = props => (
  <div className={classes.Item}>
    <div className={classes.Date}>{props.date}</div>
    <h5 className={classes.Subtitle}>{props.subtitle}</h5>
    <div className={classes.Position}>{props.education}</div>
  </div>
);

export default EducationBlock;
