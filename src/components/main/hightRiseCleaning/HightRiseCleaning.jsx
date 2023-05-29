import React from "react";
import "./_hightRiseCleaning.scss";
import HeaderAux from "../../headerAux/HeaderAux";
import Teams from "./teams/Teams";
import ServicesHightRiseCleaning from "./services/ServicesHightRiseCleaning";
import Separator1 from "../home/separators/Separator1";
import ClientsHightRiseCleaning from "./clients/ClientsHightRiseCleaning";
import backgroundHeader from "../../../assets/imgs/limpieza_de_vidrios_en_altura.png";

const HightRiseCleaning = () => {
  return (
    <div className="hightRiseCleaning">
      <HeaderAux title="Vidrios En Altura" background={backgroundHeader} />
      <Teams />
      <ServicesHightRiseCleaning />
      <Separator1 />
      <ClientsHightRiseCleaning />
    </div>
  );
};

export default HightRiseCleaning;
