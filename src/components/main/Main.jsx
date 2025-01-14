import React from "react";
import { Route } from "react-router-dom";
import Home from "./home/Home";
import BuildingMaintenanceAndRestorations from "./buildingMaintenanceAndRestorations/BuildingMaintenanceAndRestorations";
import HightRiseCleaning from "./hightRiseCleaning/HightRiseCleaning";
import "./_main.scss";
import ThamesDistributor from "./thamesDistributor/ThamesDistributor";

const Main = () => {
  return (
    <div className="main">
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/mantenimiento-y-restauraciones-edilicias"
        component={BuildingMaintenanceAndRestorations}
      />
      <Route exact path="/servicios-de-altura" component={HightRiseCleaning} />
      <Route exact path="/distribuidor-thames" component={ThamesDistributor} />
    </div>
  );
};

export default Main;
