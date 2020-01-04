import React from "react";
import classes from "./Header.module.scss";

import Avatar from "../Avatar/Avatar";

export const Header = props => {
  return (
    <header className={classes.header}>
      <div className={classes.content}>
        <div className={classes.header_inner}>
          <div className={classes.UserContainer}>
            <Avatar width="57" height="57" />
            <div className={classes.UserContent}>
              <div className={classes.UserName}></div>
              <div className={classes.UserProf}></div>
            </div>
          </div>
          <nav className={classes.nav}>2</nav>
        </div>
      </div>
    </header>
  );
};
