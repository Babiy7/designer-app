import React from "react";
import classes from "./Button.module.scss";

function Button(props) {
  let classButton = null;

  switch (props.type) {
    case "normal": {
      classButton = [classes.Button, classes.Normal].join(" ");
      break;
    }
    case "shadow": {
      classButton = [classes.Button, classes.Shadow].join(" ");
      break;
    }
    case "gray": {
      classButton = [classes.Button, classes.Gray].join(" ");
      break;
    }
    case "previous": {
      classButton = classes.ButtonPrevious;
      break;
    }
    case "next": {
      classButton = classes.ButtonNext;
      break;
    }
    default: {
      classButton = classes.Button;
    }
  }

  return (
    <button className={classButton} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
