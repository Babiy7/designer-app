import React, { useState } from "react";
import classes from "./Header.module.scss";

import Avatar from "../../Avatar/Avatar";
import NavLinks from "../../UI/NavLinks/NavLinks";
import Button from "../../UI/Button/Button";
import ModalCall from "../../Modals/ModalCall/ModalCall";

const Header = props => {
  const [show, setShow] = useState(false);

  return (
    <>
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
              <Button type="normal" onClick={() => setShow(true)}>
                Hire me
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <ModalCall show={show} unShow={() => setShow(false)} />
    </>
  );
};

export default Header;
