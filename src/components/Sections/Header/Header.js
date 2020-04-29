import React, { useState } from "react";
import classes from "./Header.module.scss";

import { CALL } from "../../../store/actionTypes";
import { connect } from "react-redux";

import Logo from "../../UI/Logo/Logo";
import NavLinks from "../../UI/NavLinks/NavLinks";
import Button from "../../UI/Button/Button";
import SideDrawer from "../../UI/SideDrawer/SideDrawer";
import BurgerButton from "../../UI/BurgerButton/BurgerButton";

const Header = props => {
  const [show, setShow] = useState(false);

  const body = document.getElementsByTagName("body")[0];
  body.style.overflow = show ? "hidden" : "auto";

  function openDrawer() {
    setShow(true);
  }

  function closeDrawer() {
    setShow(false);
  }

  return (
    <>
      <header className={classes.Header}>
        <div className={classes.Content}>
          <div className={classes.HeaderInner}>
            <Logo />

            <nav className={classes.Nav}>
              <NavLinks />

              <Button
                type="normal"
                onClick={() => {
                  props.call();
                }}
              >
                Hire me
              </Button>
            </nav>
            <div className={classes.Button}>
              <BurgerButton show={openDrawer} open={show} />
            </div>
          </div>
        </div>
        <SideDrawer show={show} unShow={closeDrawer} />
      </header>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    call: () => dispatch({ type: CALL })
  };
};

export default connect(null, mapDispatchToProps)(Header);
