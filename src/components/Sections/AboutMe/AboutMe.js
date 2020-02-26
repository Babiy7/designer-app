import React from "react";
import classes from "./AboutMe.module.scss";

import { connect } from "react-redux";
import { CALL, RESUME } from "../../../store/actionTypes";

import { Margin } from "../../UI/Helper/Helper";
import Button from "../../UI/Button/Button";
import photo from "../../../assets/images/designer_photo.png";

const AboutMe = props => {
  return (
    <>
      <section id="about-me" className={classes.AboutMe}>
        <div className={classes.Container}>
          <div className={classes.ImageContainer}>
            <img className={classes.Image} src={photo} alt="img" />
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
                <Button
                  type="shadow"
                  onClick={() => {
                    props.call();
                  }}
                >
                  Hire me
                </Button>
              </Margin>

              <Button
                type="shadow"
                onClick={() => {
                  props.resume();
                }}
              >
                See my resume
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    call: () => dispatch({ type: CALL }),
    resume: () => dispatch({ type: RESUME })
  };
};

export default connect(null, mapDispatchToProps)(AboutMe);
