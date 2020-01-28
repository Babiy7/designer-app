import React from "react";
import classes from "./Modal.module.scss";

import Backdrop from "../Backdrop/Backdrop";
import ButtonClose from "../ButtonClose/ButtonClose";

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
        <ButtonClose />
      </div>
    </Backdrop>
  </>
);

export default Modal;
