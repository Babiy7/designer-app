import React from "react";
import classes from "./Header.module.scss";

import { CALL, RESUME } from "../../../store/actionTypes";
import { connect } from "react-redux";

import Avatar from "../../Avatar/Avatar";
import NavLinks from "../../UI/NavLinks/NavLinks";
import Button from "../../UI/Button/Button";

const Header = props => {
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

              <Button
                type="normal"
                onClick={() => {
                  props.call();
                }}
              >
                Hire me
              </Button>
            </nav>

            <div className={classes.Burger}>
              {[1, 2, 3].map(_ => (
                <div className={classes.Line} />
              ))}
            </div>
          </div>
        </div>
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
