import React, { useState } from "react";
import classes from "./Footer.module.scss";

import NavLinks from "../../UI/NavLinks/NavLinks";
import Button from "../../UI/Button/Button";
import ModalCall from "../../Modals/ModalCall/ModalCall";

import instagram from "../../../assets/icons/instagram.svg";
import behance from "../../../assets/icons/behance.svg";
import facebook from "../../../assets/icons/facebook.svg";
import linkedin from "../../../assets/icons/linkedin.svg";
import twitter from "../../../assets/icons/twitter.svg";

const Footer = () => {
  const [show, setShow] = useState(false);

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
            <NavLinks />
            <Button type="gray" onClick={() => setShow(true)}>
              Hire me
            </Button>
          </nav>
        </div>
      </footer>
      <ModalCall show={show} unShow={() => setShow(false)} />
    </>
  );
};

export default Footer;
