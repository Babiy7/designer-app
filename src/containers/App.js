import React from "react";
import { Route } from "react-router-dom";

import Sections from "../components/Sections/Sections";
import ModalProject from "../components/Modals/ModalProject/ModalProject";
import ModalResume from "../components/Modals/ModalResume/ModalResume";

function App() {
  console.log("App render");

  return (
    <div className="App">
      <Route exact path="/" component={Sections} />
      <ModalProject />
      <ModalResume show={true} />
    </div>
  );
}

export default App;
