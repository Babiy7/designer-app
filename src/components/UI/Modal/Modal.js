import React from "react";
import classes from "./Modal.module.scss";

import Backdrop from "../Backdrop/Backdrop";
import closeIcon from "../../../assets/svg/close.svg";

const Modal = props => (
  <>
    <Backdrop show={props.show} unShow={props.unShow}>
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
        <div className={classes.Close}>
          <img src={closeIcon} alt="close" height="15" width="15" />
        </div>
      </div>
    </Backdrop>
  </>
);

export default Modal;
