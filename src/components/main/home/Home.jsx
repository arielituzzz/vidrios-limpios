import React from "react";
import "./_home.scss";
import Contact from "./contact/Contact";
import CarouselPresentation from "./carouselPresentation/CarouselPresentation";

const Home = () => {
  return (
    <div className="home">
      <CarouselPresentation />
      <Contact />
    </div>
  );
};

export default Home;
