import React from "react";
import { Route } from "react-router-dom";

import Sections from "../components/Sections/Sections";

function App() {
  console.log("App render");

  return (
    <div className="App">
      <Route exact path="/" component={Sections} />
    </div>
  );
}

export default App;
