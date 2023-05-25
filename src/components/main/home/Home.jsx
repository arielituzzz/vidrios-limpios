import React from "react";
import "./_home.scss";
import Contact from "./contact/Contact";
import CarouselPresentation from "./carouselPresentation/CarouselPresentation";
import Cards from "./cards/Cards";
import Separator1 from "./cards/separators/Separator1";

const Home = () => {
  return (
    <div className="home">
      <CarouselPresentation />
      <Cards />
      <Separator1 />
      <Contact />
    </div>
  );
};

export default Home;
