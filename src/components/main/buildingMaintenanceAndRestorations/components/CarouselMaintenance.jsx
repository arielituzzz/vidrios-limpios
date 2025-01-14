import React from "react";
import "./_carouselMaintenance.scss";
import CarouselMaintenanceBefore from "./CarouselMaintenanceBefore";
import CarouselMaintenanceAfter from "./CarouselMaintenanceAfter";
// import IconAfter from "../../../../assets/imgs/icons/iconAfter.png";

const CarouselMaintenance = ({ name }) => {
  return (
    <div className="carouselMaintenance">
      <div className="carouselMaintenance__title">
        <h5>{`Obra "${name}"`}</h5>
      </div>
      <div className="carouselMaintenance__content ">
        <div>
          <CarouselMaintenanceBefore name={name} />
        </div>
        <hr />
        <div>
          <CarouselMaintenanceAfter name={name} />
        </div>
      </div>
    </div>
  );
};

export default CarouselMaintenance;
