import React from "react";
import "./_carouselMaintenance.scss";
import CarouselMaintenanceBefore from "./CarouselMaintenanceBefore";
import CarouselMaintenanceAfter from "./CarouselMaintenanceAfter";
import IconAfter from "../../../../assets/imgs/icons/iconAfter.png";

const CarouselMaintenance = ({ name }) => {
  return (
    <div className="d-flex flex-column carouselMaintenance">
      <div className=" w-100 d-flex justify-content-center my-4">
        <h5 className="fs-3 text-center">{`Obra "${name}"`}</h5>
      </div>
      <div className="w-100 d-flex flex-column flex-lg-row align-items-center  justify-content-lg-center carouselMaintenance__content grid gap-0 column-gap-5 row-gap-5">
        <div className="d-flex align-items-center">
          <CarouselMaintenanceBefore name={name} />
        </div>
        <img
          src={IconAfter}
          alt="iconAfter"
          className="carouselMaintenance__imgAfter"
        />

        <div className="d-flex align-items-center">
          <CarouselMaintenanceAfter name={name} />
        </div>
      </div>
    </div>
  );
};

export default CarouselMaintenance;
