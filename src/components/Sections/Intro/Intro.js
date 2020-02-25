import React from "react";
import classes from "./Intro.module.scss";

import { connect } from "react-redux";
import { CALL, RESUME } from "../../../store/actionTypes";

import SocialImage from "../../SocialImage/SocialImage";
import Button from "../../UI/Button/Button";
import { Image, Margin } from "../../UI/Helper/Helper";
import person from "../../../assets/images/photo.png";

const Intro = props => {
  let body = document.getElementsByTagName("body")[0];

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

          <div className={classes.Photo}>
            <Image src={person} alt="person" />
          </div>
        </div>
      </div>
      />
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    call: () => dispatch({ type: CALL }),
    resume: () => dispatch({ type: RESUME })
  };
};

export default connect(null, mapDispatchToProps)(Intro);
