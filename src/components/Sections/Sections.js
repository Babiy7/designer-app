import React from "react";

import Header from "./Header/Header";
import Intro from "./Intro/Intro";
import Works from "./Works/Works";
import AboutMe from "./AboutMe/AboutMe";
import Review from "./Review/Review";
import News from "./News/News";
import Footer from "./Footer/Footer";

const Section = () => {
  return (
    <>
      <Header />
      {/* <Intro /> */}
      <Works />
      <AboutMe />
      <Review />
      <News />
      <Footer />
    </>
  );
};

export default Section;
