import React from "react";
import "./_buildingMaintenanceAndRestorations.scss";
import Top from "../top/Top";
import HeaderAux from "../../headerAux/HeaderAux";
import imgBackground from "../../../assets/imgs/mantenimiento-y-restauraciones-edilicias.png";
import CarouselMaintenance from "./components/CarouselMaintenance";
import { OperationsData } from "../../../assets/generators";
import ImgFinancing from "../../../assets/imgs/icons/iconFinancing.png";

const BuildingMaintenanceAndRestorations = () => {
  return (
    <div>
      <Top />
      <HeaderAux
        title="Mantenimiento y Restauraciones Edilicias"
        background={imgBackground}
      />
      <div className="buildingMaintenanceAndRestorations">
        <div className="w-100 d-flex justify-content-center text-center">
          <h4 className="animate__animated animate__zoomIn buildingMaintenanceAndRestorations__promoTitle d-flex flex-column flex-lg-row justify-content-center align-items-lg-center ">
            CONSULTE FINANCIACION{" "}
            <span>
              <img src={ImgFinancing} alt="iconFinancing" />
            </span>
            <span className="animate__animated animate__fadeIn">
              HASTA 12 CUOTAS!!!
            </span>
          </h4>
        </div>
        <div className="py-3  ps-4 d-flex justify-content-start">
          <h5 className="fs-4">Algunos de nuestros trabajos</h5>
        </div>
        <div className="d-flex flex-column align-items-center">
          {OperationsData.map((operation) => (
            <CarouselMaintenance name={operation.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildingMaintenanceAndRestorations;
