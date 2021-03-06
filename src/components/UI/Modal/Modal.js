import React from "react";
import classes from "./Modal.module.scss";

import Backdrop from "../Backdrop/Backdrop";
import ButtonClose from "../ButtonClose/ButtonClose";

const Modal = props => {
  let modal = null;

  if (props.size === "lg") {
    modal = [classes.Modal, classes.Large].join(" ");
  } else if (props.size === "md") {
    modal = [classes.Modal, classes.Middle].join(" ");
  } else {
    modal = [classes.Modal, classes.Small].join(" ");
  }

  return (
    <>
      <Backdrop show={props.show} unShow={props.unShow} />
      <div
        className={modal}
        style={{
          width: `${props.width}px`,
          transform: props.show
            ? "translate(-50%, -50%)"
            : "translate(-50%, -200%)"
        }}
      >
        {props.children}
        <ButtonClose unShow={props.unShow} />
      </div>
    </>
  );
};

export default Modal;
