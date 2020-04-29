import React from "react";
import classes from "./NavLink.module.scss";

const NavLink = props => {
  return (
    <a href={props.link} className={classes.NavLink}>
      {props.children}
    </a>
  );
};

export default NavLink;
