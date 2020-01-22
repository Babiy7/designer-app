import React from "react";
import classes from "./Header.module.scss";

import Avatar from "../../Avatar/Avatar";
import NavLinks from "../../UI/NavLinks/NavLinks";
import Button from "../../UI/Button/Button";

const Header = props => {
  return (
    <header className={classes.Header}>
      <div className={classes.Content}>
        <div className={classes.HeaderInner}>
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
          <nav className={classes.Nav}>
            <NavLinks />
            <Button>Hire me</Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
