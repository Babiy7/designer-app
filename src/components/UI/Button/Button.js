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
      classButton = [classes.ButtonMove, classes.Previous].join(" ");
      break;
    }
    case "next": {
      classButton = [classes.ButtonMove, classes.Next].join(" ");
      break;
    }
    default: {
      classButton = classes.Button;
    }
  }

  return <button className={classButton}>{props.children}</button>;
}

export default Button;
