import React, { useState } from "react";
import classes from "./Header.module.scss";

import { CALL } from "../../../store/actionTypes";
import { connect } from "react-redux";

import Logo from "../../UI/Logo/Logo";
import NavLinks from "../../UI/NavLinks/NavLinks";
import Button from "../../UI/Button/Button";
import SideDrawer from "../../UI/SideDrawer/SideDrawer";

const Header = props => {
  const [state, setState] = useState(false);

  function open() {
    setState(true);
  }

  function close() {
    setState(false);
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

            <div
              className={classes.Burger}
              onClick={() => {
                open();
              }}
              style={{ display: state ? "none" : "flex" }}
            >
              {[1, 2, 3].map(_ => (
                <div className={classes.Line} />
              ))}
            </div>
          </div>
        </div>
        <SideDrawer show={state} unShow={close} />
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
