import React from "react";
import "./_services.scss";

const Services = () => {
  return (
    <div className="services">
      <div className="services__content">
        <h3 className="services__content__title">Servicios</h3>
        <ul className="services__content__list">
          <li className="services__content__list__text">Limpieza de Vidrios</li>
          <li className="services__content__list__text">
            Limpieza de Oficinas
          </li>
          <li className="services__content__list__text">Finales de Obra</li>
          <li className="services__content__list__text">Limpieza en Altura</li>
          <li className="services__content__list__text">
            Limpieza de Consorcios
          </li>
          <li className="services__content__list__text">
            Distribuidora "CASA THAMES"
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
