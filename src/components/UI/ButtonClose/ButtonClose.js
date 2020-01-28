import React from "react";
import classes from "./ButtonClose.module.scss";

import closeIcon from "../../../assets/svg/close.svg";

const ButtonClose = () => {
  return (
    <div className={classes.Close}>
      <img src={closeIcon} alt="close" height="15" width="15" />
    </div>
  );
};

export default ButtonClose;
