import React from "react";
import classes from "./Intro.module.scss";

import SocialImage from "../SocialImage/SocialImage";
import Button from "../UI/Button/Button";
import { Image } from "../UI/Helper/Helper";
import person from "../../assets/images/photo.png";

const Intro = () => {
  return (
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
          <Button shadow>Hire me</Button>
          <Button shadow>See my resume</Button>
        </div>
        <div className={classes.Photo}>
          <Image src={person} alt="person" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
