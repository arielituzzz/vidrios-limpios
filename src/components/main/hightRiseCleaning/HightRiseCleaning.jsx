import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
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
