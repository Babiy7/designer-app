import React from "react";
import classes from "./App.module.scss";

import { Route } from "react-router-dom";

import Sections from "../components/Sections/Sections";
import ModalProject from "../components/Modals/ModalProject/ModalProject";
import ModalResume from "../components/Modals/ModalResume/ModalResume";
import ModalCall from "../components/Modals/ModalCall/ModalCall";

function App() {
  console.log("App render");

  return (
    <div className="App">
      <Route exact path="/" component={Sections} />
      {/* <ModalProject show={true} /> */}
      <ModalCall show={true} />
      {/* <ModalResume show={true} /> */}
    </div>
  );
}

export default App;
