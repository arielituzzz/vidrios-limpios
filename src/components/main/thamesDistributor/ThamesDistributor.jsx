import React from "react";
import "./_thamesDistributor.scss";
import HeaderAux from "../../headerAux/HeaderAux";
import imgBackground from "../../../assets/imgs/distribuidora-thames.png";
import PresentationThames from "./presentation/PresentationThames";

const ThamesDistributor = () => {
  return (
    <div>
      <HeaderAux
        title="Distribuidora Oficial 'CASA THAMES'"
        background={imgBackground}
      />
      <PresentationThames />
    </div>
  );
};

export default ThamesDistributor;
