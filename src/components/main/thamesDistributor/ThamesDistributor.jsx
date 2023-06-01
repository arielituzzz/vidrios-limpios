import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./_thamesDistributor.scss";
import Top from "../top/Top";
import HeaderAux from "../../headerAux/HeaderAux";
import PresentationThames from "./presentation/PresentationThames";
import imgBackground from "../../../assets/imgs/distribuidora-thames.png";

const ThamesDistributor = () => {
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
    <div>
      <Top />
      <HeaderAux
        title="Distribuidor Oficial 'CASA THAMES'"
        background={imgBackground}
      />
      <PresentationThames />
    </div>
  );
};

export default ThamesDistributor;
