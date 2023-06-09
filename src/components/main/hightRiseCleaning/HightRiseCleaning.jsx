import React from "react";
import "./_hightRiseCleaning.scss";
import Top from "../top/Top";
import HeaderAux from "../../headerAux/HeaderAux";
import Services from "./services1/Services";
import Teams from "./teams/Teams";
import ServicesHightRiseCleaning from "./services2/ServicesHightRiseCleaning";
import Separator1 from "../home/separators/Separator1";
import ClientsHightRiseCleaning from "./clients/ClientsHightRiseCleaning";
import backgroundHeader from "../../../assets/imgs/limpieza_de_vidrios_en_altura.png";

const HightRiseCleaning = () => {
  return (
    <div className="hightRiseCleaning" id="hightRiseCleaning">
      <Top />
      <HeaderAux title="Servicios de Altura" background={backgroundHeader} />
      <Services />
      <Teams />
      <ServicesHightRiseCleaning />
      <Separator1 />
      <ClientsHightRiseCleaning />
    </div>
  );
};

export default HightRiseCleaning;
