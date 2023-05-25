import React from "react";
import "./_home.scss";
import Contact from "./contact/Contact";
import CarouselPresentation from "./carouselPresentation/CarouselPresentation";
import Cards from "./cards/Cards";

const Home = () => {
  return (
    <div className="home">
      <CarouselPresentation />
      <Cards />
      <Contact />
    </div>
  );
};

export default Home;
