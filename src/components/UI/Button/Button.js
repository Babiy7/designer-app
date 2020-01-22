import React from "react";
import classes from "./Button.module.scss";

function Button(props) {
  let classButton = null;

  switch (props.type) {
    case "normal": {
      classButton = classes.Button;
      break;
    }
    case "shadow": {
      classButton = classes.ButtonShadow;
      break;
    }
    case "gray": {
      classButton = classes.ButtonGray;
      break;
    }
    default: {
      classButton = classes.Button;
    }
  }

  return <button className={classButton}>{props.children}</button>;
}

export default Button;
