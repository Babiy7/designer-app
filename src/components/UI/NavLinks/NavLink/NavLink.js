import React from "react";
import classes from "./NavLink.module.scss";
//import { NavLink } from "react-router-dom";

const MNavLink = props => {
  return (
    <a
      href={props.link}
      // activeClassName={props.active ? classes.active : null}
      className={classes.NavLink}
    >
      {props.children}
    </a>
  );
};

export default MNavLink;
