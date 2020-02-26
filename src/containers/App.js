import React from "react";
import classes from "./App.module.scss";

import { connect } from "react-redux";
import { CALL, RESUME, PROJECT } from "../store/actionTypes";

import ModalProject from "../components/Modals/ModalProject/ModalProject";
import ModalResume from "../components/Modals/ModalResume/ModalResume";
import ModalCall from "../components/Modals/ModalCall/ModalCall";
import Header from "../components/Sections/Header/Header";
import Intro from "../components/Sections/Intro/Intro";
import Works from "./Works/Works";
import AboutMe from "../components/Sections/AboutMe/AboutMe";
import Review from "../components/Sections/Review/Review";
import News from "../components/Sections/News/News";
import Footer from "../components/Sections/Footer/Footer";

function App(props) {
  console.log("App render");

  const [call, resume, project] = props.modals;

  return (
    <div className={classes.App}>
      <Header />
      <Intro />
      <Works />
      <AboutMe />
      <Review />
      <News />
      <Footer />

      <ModalResume show={resume.isOpen} unShow={() => props.resume()} />
      <ModalProject show={project.isOpen} unShow={() => props.project()} />
      <ModalCall show={call.isOpen} unShow={() => props.call()} />
    </div>
  );
}

const mapStateToProps = state => ({
  modals: [state.modal.call, state.modal.resume, state.modal.project]
});

const mapDispatchToProps = dispatch => ({
  call: () => dispatch({ type: CALL }),
  resume: () => dispatch({ type: RESUME }),
  project: () => dispatch({ type: PROJECT })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
