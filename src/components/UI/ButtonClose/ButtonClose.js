import React from "react";
import classes from "./ButtonClose.module.scss";

import closeIcon from "../../../assets/svg/close.svg";

const ButtonClose = props => {
  return (
    <div onClick={props.unShow} className={classes.Close}>
      <img src={closeIcon} alt="close" height="15" width="15" />
    </div>
  );
};

export default ButtonClose;
