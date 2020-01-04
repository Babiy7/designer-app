import React from "react";
import classes from "./Avatar.module.scss";

const Avatar = props => {
  return (
    <div
      className={classes.Container}
      style={{ width: props.width + "px", height: props.height + "px" }}
    >
      {/* <img src="" alt="avatar" /> */}
    </div>
  );
};

export default Avatar;
