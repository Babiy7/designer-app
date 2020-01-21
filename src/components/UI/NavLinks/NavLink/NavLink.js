import React from "react";
import classes from "./NavLink.module.scss";
import { NavLink } from "react-router-dom";

const MNavLink = props => {
  return (
    <NavLink
      to={props.link}
      activeClassName={props.active ? classes.active : null}
      className={classes.NavLink}
    >
      {props.children}
    </NavLink>
  );
};

export default MNavLink;
