import React from "react";
import classes from "./Button.module.scss";

function Button(props) {
  let classButton = props.shadow ? classes.ButtonShadow : classes.Button;

  return <button className={classButton}>{props.children}</button>;
}

export default Button;
