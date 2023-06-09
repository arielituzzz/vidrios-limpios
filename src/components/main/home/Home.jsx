import React from "react";
import "./_home.scss";
import Top from "../top/Top";
import CarouselPresentation from "./carouselPresentation/CarouselPresentation";
import Cards from "./cards/Cards";
import Separator1 from "./separators/Separator1";
import About from "./about/About";
import Separator2 from "./separators/Separator2";
import CarouselMarks from "./carouselMarks/CarouselMarks";
import ContactUs from "./contact/Contact";

const Home = () => {
  return (
    <div className="home">
      <Top />
      <CarouselPresentation />
      <Cards />
      <Separator1 />
      <About />
      <Separator2 />
      <CarouselMarks />
      <ContactUs />
    </div>
  );
};

export default Home;
