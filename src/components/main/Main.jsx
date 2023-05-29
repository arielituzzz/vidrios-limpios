import React from "react";
import { Route } from "react-router-dom";
import Home from "./home/Home";
import HightRiseCleaning from "./hightRiseCleaning/HightRiseCleaning";
import "./_main.scss";
import ThamesDistributor from "./thamesDistributor/ThamesDistributor";

const Main = () => {
  return (
    <div className="main">
      <Route exact path="/" component={Home} />
      <Route exact path="/limpieza-en-altura" component={HightRiseCleaning} />
      <Route exact path="/distribuidora-thames" component={ThamesDistributor} />
    </div>
  );
};

export default Main;
