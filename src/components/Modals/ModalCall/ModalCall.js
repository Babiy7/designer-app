import React from "react";
import classes from "./ModalCall.module.scss";

import Modal from "../../UI/Modal/Modal";
import Button from "../../UI/Button/Button";
import call from "../../../assets/svg/call.svg";
import email from "../../../assets/svg/email.svg";
import city from "../../../assets/images/city.jpg";

const ModalCall = props => {
  return (
    <Modal show={props.show} size="sm" unShow={props.unShow}>
      <div className={classes.ModalCall}>
        <div className={classes.Left}>
          <h3 className={classes.Title}>Let's Talk!</h3>

          <h4 className={classes.Subtitle}>Call me or send me a request</h4>

          <ul className={classes.Contacts}>
            <li className={classes.Item}>
              <img src={call} alt="call" className={classes.Icon} /> (200) 100
              3000
            </li>

            <li className={classes.Item}>
              <img src={email} alt="email" className={classes.Icon} />{" "}
              designer@ui43.com
            </li>
          </ul>

          <form action="/" method="post" className={classes.Form}>
            <div className={classes.Group}>
              <label className={classes.Label}>Adress e-mail</label>

              <input
                type="email"
                name="email"
                className={classes.Input}
                placeholder="Adress e-mail"
              />
            </div>

            <div className={classes.Group}>
              <label className={classes.Label}>Request</label>

              <textarea
                type="text"
                name="text"
                className={[classes.Input, classes.TextArea].join(" ")}
                placeholder="Type your request..."
              />
            </div>

            <div className={classes.Buttons}>
              <Button type="normal">Send</Button>
            </div>
          </form>
        </div>

        <div className={classes.Right}>
          <img src={city} alt="city" height="700" width="500" />
        </div>
      </div>
    </Modal>
  );
};

export default ModalCall;
