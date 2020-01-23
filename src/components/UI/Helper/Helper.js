import React from "react";
import classes from "./Helper.module.scss";

export const ContentCenterHorisontal = props => {
  return (
    <div className={classes.ContentCenterHorisontal}>{props.children}</div>
  );
};

export const ContentCenterVertical = props => {
  return <div className={classes.ContentCenterVertical}>{props.children}</div>;
};

export const Image = props => {
  return <img src={props.src} alt={props.alt} className={classes.Image} />;
};

export const Margin = props => {
  return (
    <div
      style={{
        margin: `${props.top || 0}px ${props.right || 0}px ${props.bottom ||
          0}px ${props.left || 0}px`
      }}
    >
      {props.children}
    </div>
  );
};
