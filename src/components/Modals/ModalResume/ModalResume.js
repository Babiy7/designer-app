import React from "react";
import classes from "./ModalResume.module.scss";

import Modal from "../../UI/Modal/Modal";
import Button from "../../UI/Button/Button";
import { Margin } from "../../UI/Helper/Helper";
import ExperienceBlock from "./ExperienceWork/ExperienceWork";
import EducationBlock from "./EducationBlock/EducationBlock";
import ProgressBar from "../../UI/ProgressBar/ProgressBar";

const ModalResume = props => {
  return (
    <Modal size="lg" show={props.show} unShow={props.unShow}>
      <div className={classes.ModalResume}>
        <h2 className={classes.Title}>Resume</h2>

        <div className={classes.Buttons}>
          <Margin right="5">
            <Button type="gray">Download PDF</Button>
          </Margin>

          <Button type="gray">Print</Button>
        </div>
        <div className={classes.Timeline}>
          <section className={classes.Experience}>
            <h4 className={classes.TimelineTitle}>Experience</h4>

            <div className={classes.Items}>
              {[
                {
                  date: "2017 - Present",
                  agency: "Freelancer",
                  position: "Art Director"
                },
                {
                  date: "2016 - 2017",
                  agency: "The Best Agency",
                  position: "Art Director"
                }
              ].map(item => {
                return (
                  <ExperienceBlock
                    key={item.date}
                    date={item.date}
                    subtitle={item.agency}
                    position={item.position}
                  />
                );
              })}
            </div>
          </section>
          <section className={classes.Education}>
            <h4 className={classes.TimelineTitle}>Education</h4>

            <div className={classes.Items}>
              {[
                {
                  date: "2005 - 2010",
                  title: "UI/UX Design",
                  education: "LA University, USA"
                },
                {
                  date: "2005 - 2010",
                  title: "UI/UX Design",
                  education: "LA University, USA"
                }
              ].map(item => (
                <EducationBlock
                  date={item.date}
                  subtitle={item.title}
                  education={item.education}
                />
              ))}
            </div>

            <h4 className={classes.TimelineTitle}>Skills</h4>

            <div className={classes.ProgressBars}>
              <ProgressBar title="UI/UX Design" percent="85" />
              <ProgressBar title="Illustrator" percent="80" />
              <ProgressBar title="Photoshop" percent="70" />
              <ProgressBar title="Sketch" percent="90" />
            </div>

            <Margin bottom="28">
              <h4 className={classes.TimelineTitle}>Awards</h4>
            </Margin>

            <div className={classes.Awards}>
              {[
                {
                  date: "2016",
                  award: "THE BEST APP INTERFACE",
                  position: "UI/UX Magazine"
                },
                {
                  date: "2016",
                  award: "THE BEST WEBSITE",
                  position: "UI/UX Magazine"
                }
              ].map(item => {
                return (
                  <ExperienceBlock
                    key={item.date}
                    date={item.date}
                    subtitle={item.award}
                    position={item.position}
                  />
                );
              })}
            </div>
          </section>
        </div>

        <Margin top="30">
          <Button type="shadow">Hire me</Button>
        </Margin>
      </div>
    </Modal>
  );
};

export default ModalResume;
