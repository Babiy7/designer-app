import React from "react";
import { Route } from "react-router-dom";

import { Header } from "../components/Header/Header";
import Intro from "../components/Intro/Intro";
import Works from "../components/Works/Works";
import AboutMe from "../components/AboutMe/AboutMe";
import Review from "../components/Review/Review";

function App(props) {
  console.log("App render");

  return (
    <div className="App">
      <Route exact path="/" component={Header} />
      <Intro />
      <Works />
      <AboutMe />
      <Review />
    </div>
  );
}

export default App;
