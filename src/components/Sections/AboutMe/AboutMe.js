import React, { useState } from "react";
import classes from "./AboutMe.module.scss";

import { Image, Margin } from "../../UI/Helper/Helper";
import Button from "../../UI/Button/Button";
import photo from "../../../assets/images/designer_photo.png";
import ModalResume from "../../Modals/ModalResume/ModalResume";
import ModalCall from "../../Modals/ModalCall/ModalCall";

const AboutMe = () => {
  const [showResume, setShowResume] = useState(false);
  const [showCall, setShowCall] = useState(false);

  return (
    <>
      <section id="about-me" className={classes.AboutMe}>
        <div className={classes.Container}>
          <div className={classes.ImageContainer}>
            <img className={classes.Image} src={photo} alt="photo" />
          </div>

          <div className={classes.Content}>
            <h3 className={classes.FirstTitle}>About me</h3>

            <h2 className={classes.SecondTitle}>Who am I</h2>

            <div className={classes.Text}>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perspiciatis voluptates fugit accusamus optio nobis vel beatae,
                excepturi illum repudiandae aliquam at eveniet quam cupiditate
                voluptatem repellat minus aut laboriosam blanditiis!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perspiciatis voluptates fugit accusamus optio nobis vel beatae,
                excepturi illum repudiandae aliquam at eveniet quam cupiditate
                voluptatem repellat minus aut laboriosam blanditiis!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perspiciatis voluptates fugit accusamus optio nobis vel beatae,
                excepturi illum repudiandae aliquam at eveniet quam cupiditate
                voluptatem repellat minus aut laboriosam blanditiis!
              </p>
            </div>

            <div className={classes.Buttons}>
              <Margin right="15">
                <Button type="shadow" onClick={() => setShowCall(true)}>
                  Hire me
                </Button>
              </Margin>

              <Button type="shadow" onClick={() => setShowResume(true)}>
                See my resume
              </Button>
            </div>
          </div>
        </div>
      </section>
      <ModalResume show={showResume} unShow={() => setShowResume(false)} />
      <ModalCall show={showCall} unShow={() => setShowCall(false)} />
    </>
  );
};

export default AboutMe;
