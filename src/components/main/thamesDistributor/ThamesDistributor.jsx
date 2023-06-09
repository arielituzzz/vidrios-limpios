import React from "react";
import "./_thamesDistributor.scss";
import Top from "../top/Top";
import HeaderAux from "../../headerAux/HeaderAux";
import PresentationThames from "./presentation/PresentationThames";
import imgBackground from "../../../assets/imgs/distribuidora-thames.png";

const ThamesDistributor = () => {
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
