import React from "react";
import classes from "./BurgerButton.module.scss";

const BurgerButton = props => {
  return (
    <div
      className={classes.Burger}
      onClick={props.show}
      style={{ display: props.open ? "none" : "flex" }}
    >
      {[1, 2, 3].map(_ => (
        <div className={classes.Line} />
      ))}
    </div>
  );
};

export default BurgerButton;
