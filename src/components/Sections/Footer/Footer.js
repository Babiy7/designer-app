import React from "react";
import classes from "./Footer.module.scss";

import NavLinks from "../../UI/NavLinks/NavLinks";
import Button from "../../UI/Button/Button";
import instagram from "../../../assets/icons/instagram.svg";
import behance from "../../../assets/icons/behance.svg";
import facebook from "../../../assets/icons/facebook.svg";
import linkedin from "../../../assets/icons/linkedin.svg";
import twitter from "../../../assets/icons/twitter.svg";

const Footer = () => {
  return (
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
          <Button type="gray">Hire me</Button>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
