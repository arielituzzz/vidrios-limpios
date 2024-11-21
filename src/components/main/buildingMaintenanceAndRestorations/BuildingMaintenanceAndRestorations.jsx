import React from "react";
import "./_buildingMaintenanceAndRestorations.scss";
import Top from "../top/Top";
import HeaderAux from "../../headerAux/HeaderAux";
import imgBackground from "../../../assets/imgs/mantenimiento-y-restauraciones-edilicias.png";
import CarouselMaintenance from "./components/CarouselMaintenance";
import { OperationsData } from "../../../assets/generators";

const BuildingMaintenanceAndRestorations = () => {
  return (
    <div>
      <Top />
      <HeaderAux
        title="Mantenimiento y Restauraciones Edilicias"
        background={imgBackground}
      />
      <div className="buildingMaintenanceAndRestorations">
        <div className="py-3  ps-4 d-flex justify-content-start">
          <h5 className="fs-4">Algunos de nuestros trabajos</h5>
        </div>
        {OperationsData.map((operation) => (
          <CarouselMaintenance name={operation.name} />
        ))}
      </div>
    </div>
  );
};

export default BuildingMaintenanceAndRestorations;
