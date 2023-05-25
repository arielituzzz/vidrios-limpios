import React from "react";
import "./_home.scss";
import Contact from "./contact/Contact";
import CarouselPresentation from "./carouselPresentation/CarouselPresentation";
import Cards from "./cards/Cards";
import Separator1 from "./separators/Separator1";
import Services from "./services/Services";
import About from "./about/About";

const Home = () => {
  return (
    <div className="home">
      <CarouselPresentation />
      <Cards />
      <Separator1 />
      <Services />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
