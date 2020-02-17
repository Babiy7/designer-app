import React from "react";

// import ModalProject from "../components/Modals/ModalProject/ModalProject";
import ModalResume from "../components/Modals/ModalResume/ModalResume";
// import ModalCall from "../components/Modals/ModalCall/ModalCall";
import Header from "../components/Sections/Header/Header";
import Intro from "../components/Sections/Intro/Intro";
import Works from "./Works/Works";
import AboutMe from "../components/Sections/AboutMe/AboutMe";
import Review from "../components/Sections/Review/Review";
import News from "../components/Sections/News/News";
import Footer from "../components/Sections/Footer/Footer";

function App() {
  console.log("App render");

  return (
    <div className="App">
      <Header />
      <Intro />
      <Works />
      <AboutMe />
      <Review />
      <News />
      <Footer />
    </div>
  );
}

export default App;
