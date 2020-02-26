import React from "react";
import classes from "./NavLink.module.scss";

const MNavLink = props => {
  return (
    <a href={props.link} className={classes.NavLink}>
      {props.children}
    </a>
  );
};

export default MNavLink;
