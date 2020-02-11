import React from "react";
import classes from "./Works.module.scss";

import Portfolio from "../../Portfolio/Portfolio";

const Portfolios = props => {
  return (
    <div className={classes.Portfolios}>
      {props.portfolios.map(item => (
        <Portfolio portfolio={item} />
      ))}
    </div>
  );
};

export default Portfolios;
