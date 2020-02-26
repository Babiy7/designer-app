import React from "react";
import classes from "./Logo.module.scss";

import Avatar from "../../Avatar/Avatar";

const Logo = () => {
  return (
    <div className={classes.UserContainer}>
      <Avatar width="57" height="57" />
      <div className={classes.UserContent}>
        <div className={classes.UserName}>
          Lewis
          <br />
          Nathaniel
        </div>

        <div className={classes.UserProf}>UI &amp; UX Designer</div>
      </div>
    </div>
  );
};

export default Logo;
