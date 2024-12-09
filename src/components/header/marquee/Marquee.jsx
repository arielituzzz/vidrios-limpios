import React from "react";
import "./_marquee.scss";

const Marquee = () => {
  return (
    <div className="marquee ">
      <div className="marquee__content animate__animated animate__slideOutLeft">
        <div className="marquee__content__text">
          CONSULTE POR NUESTROS ABONOS ANUALES 2025!!!
        </div>
      </div>
    </div>
  );
};

export default Marquee;
