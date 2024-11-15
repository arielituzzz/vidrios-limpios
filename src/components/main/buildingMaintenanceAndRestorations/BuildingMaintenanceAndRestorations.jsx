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
        {OperationsData.map((operation) => (
          <CarouselMaintenance name={operation.name} />
        ))}
      </div>
    </div>
  );
};

export default BuildingMaintenanceAndRestorations;
