import React from "react";
import classes from "./ExperienceWork.module.scss";

const ExperienceWork = props => (
  <div className={classes.Item}>
    <div className={classes.Date}>{props.date}</div>
    <h5 className={classes.Subtitle}>{props.subtitle}</h5>
    <div className={classes.Position}>{props.position}</div>
    <div className={classes.Text}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        nobis porro non est quibusdam id eius at, officia quasi repellendus
        atque necessitatibus exercitationem pariatur alias? Nam itaque non
        ducimus eveniet!
      </p>
    </div>
  </div>
);

export default ExperienceWork;
