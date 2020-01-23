import React from "react";
import classes from "./AboutMe.module.scss";

import { Image } from "../../UI/Helper/Helper";
import Button from "../../UI/Button/Button";
import photo from "../../../assets/images/designer_photo.png";

const AboutMe = () => {
  return (
    <section id="about-me" className={classes.AboutMe}>
      <div className={classes.Container}>
        <div className={classes.Image}>
          <Image src={photo} alt="photo" />
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
          <Button type="shadow">Hire me</Button>
          <Button type="shadow">See my resume</Button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
