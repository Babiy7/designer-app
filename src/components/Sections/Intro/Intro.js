import React, { useState } from "react";
import classes from "./Intro.module.scss";

import SocialImage from "../../SocialImage/SocialImage";
import Button from "../../UI/Button/Button";
import { Image, Margin } from "../../UI/Helper/Helper";
import person from "../../../assets/images/photo.png";
import ModalResume from "../../Modals/ModalResume/ModalResume";
import ModalCall from "../../Modals/ModalCall/ModalCall";

const Intro = () => {
  const [showResume, setShowResume] = useState(false);
  const [showCall, setShowCall] = useState(false);

  return (
    <>
      <div className={classes.Intro}>
        <div className={classes.Container}>
          <div className={classes.Content}>
            <h2 className={classes.Subtitle}>Hello, I'm</h2>

            <h1 className={classes.Title}>Lewis Nathaniel</h1>

            <div className={classes.Text}>UI &amp; UX Designer</div>

            <div className={classes.Socials}>
              {[
                "instagram",
                "facebook",
                "in",
                "dribbble",
                "behance",
                "twitter"
              ].map(item => {
                return <SocialImage type={item} />;
              })}
            </div>

            <div className={classes.Buttons}>
              <Margin right="15">
                <Button type="shadow" onClick={() => setShowResume(true)}>
                  Hire me
                </Button>
              </Margin>

              <Button type="shadow" onClick={() => setShowCall(true)}>
                See my resume
              </Button>
            </div>
          </div>

          <div className={classes.Photo}>
            <Image src={person} alt="person" />
          </div>
        </div>
      </div>
      <ModalResume show={showResume} unShow={() => setShowCall(false)} />
      <ModalCall show={showCall} unShow={() => setShowResume(false)} />
    </>
  );
};

export default Intro;
