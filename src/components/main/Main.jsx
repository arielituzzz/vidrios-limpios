import React from "react";
import { Route } from "react-router-dom";
import Home from "./home/Home";
import HightRiseCleaning from "./hightRiseCleaning/HightRiseCleaning";
import "./_main.scss";

const Main = () => {
  return (
    <div className="main">
      <Route exact path="/" component={Home} />
      <Route exact path="/limpieza-en-altura" component={HightRiseCleaning} />
    </div>
  );
};

export default Main;
