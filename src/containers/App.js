import React from "react";
import { Route } from "react-router-dom";

import Sections from "../components/Sections/Sections";
import Modal from "../components/UI/Modal/Modal";
import ModalProject from "../components/Modals/ModalProject/ModalProject";

function App() {
  console.log("App render");

  return (
    <div className="App">
      <Route exact path="/" component={Sections} />
      <Modal show>
        <ModalProject />
      </Modal>
    </div>
  );
}

export default App;
