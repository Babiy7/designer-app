import React from "react";
import classes from "./SideDrawer.module.scss";

import NavLinks from "../NavLinks/NavLinks";
import Logo from "../Logo/Logo";
import Backdrop from "../Backdrop/Backdrop";

const SideDrawer = props => {
  return (
    <>
      <Backdrop show={props.show} unShow={props.unShow} />
      <div
        className={[
          classes.Drawer,
          props.show ? classes.Open : classes.Close
        ].join(" ")}
      >
        <Logo />
        <nav className={classes.Nav}>
          <NavLinks />
        </nav>
        <div className={classes.LineFirst}></div>
        <div className={classes.LineSecond}></div>
      </div>
    </>
  );
};

export default SideDrawer;
