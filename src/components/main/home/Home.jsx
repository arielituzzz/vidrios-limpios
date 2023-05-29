import React from "react";
import "./_home.scss";
import ContactUs from "./contact/Contact";
import CarouselPresentation from "./carouselPresentation/CarouselPresentation";
import Cards from "./cards/Cards";
import Separator1 from "./separators/Separator1";
import Services from "./services/Services";
import About from "./about/About";
import Separator2 from "./separators/Separator2";
import CarouselMarks from "./carouselMarks/CarouselMarks";

const Home = () => {
  return (
    <div className="home">
      <CarouselPresentation />
      <Cards />
      <Separator1 />
      <Services />
      <About />
      <Separator2 />
      <CarouselMarks />
      <ContactUs />
    </div>
  );
};

export default Home;
