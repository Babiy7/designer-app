import React from "react";
import classes from "./Footer.module.scss";

import { connect } from "react-redux";
import { CALL } from "../../../store/actionTypes";

import NavLinks from "../../UI/NavLinks/NavLinks";
import Button from "../../UI/Button/Button";

import instagram from "../../../assets/icons/instagram.svg";
import behance from "../../../assets/icons/behance.svg";
import facebook from "../../../assets/icons/facebook.svg";
import linkedin from "../../../assets/icons/linkedin.svg";
import twitter from "../../../assets/icons/twitter.svg";

const Footer = props => {
  return (
    <>
      <footer className={classes.Footer}>
        <div className={classes.Container}>
          <div className={classes.Credits}>
            <div className={classes.Copyright}>
              &copy; 2018 UI43 - Free Templates
            </div>

            <div className={classes.Social}>
              {[instagram, behance, facebook, linkedin, twitter].map(icon => (
                <img src={icon} alt="icon" className={classes.Icon} />
              ))}
            </div>
          </div>

          <nav className={classes.Nav}>
            <div>
              <NavLinks />
            </div>
            <div>
              <Button
                type="gray"
                onClick={() => {
                  props.call();
                }}
              >
                Hire me
              </Button>
            </div>
          </nav>
        </div>
      </footer>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    call: () => dispatch({ type: CALL })
  };
};

export default connect(null, mapDispatchToProps)(Footer);
