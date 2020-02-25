import React from "react";
import classes from "./App.module.scss";

import { connect } from "react-redux";

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

  const modal = props.modal;

  console.log(props);

  return (
    <div className={classes.App}>
      <Header />
      <Intro />
      <Works />
      <AboutMe />
      <Review />
      <News />
      <Footer />

      <ModalResume show={modal.resume.isOpen} />
      <ModalProject show={modal.project.isOpen} />
      <ModalCall show={modal.call.isOpen} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.modal
  };
};

export default connect(mapStateToProps)(App);
