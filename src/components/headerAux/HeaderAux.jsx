import React from "react";
import "./_headerAux.scss";

const HeaderAux = ({ title, background }) => {
  return (
    <div
      className="headerAux"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h3 className="headerAux__title">{title}</h3>
    </div>
  );
};

export default HeaderAux;
