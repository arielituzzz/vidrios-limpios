import React from "react";
import "./_services.scss";
import {
  ServicesData,
  SpecialServicesData,
} from "../../../../assets/generators";

const Services = () => {
  return (
    <div className="services">
      <div className="services__content">
        <div className="services__content__row1">
          <h3 className="services__content__row1__title">Servicios</h3>
          <ul className="services__content__row1__list">
            {ServicesData.map((item, index) => (
              <li className="services__content__row1__list__text" key={index}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="services__content__row2">
          <h3 className="services__content__row2__title">
            Servicios Especiales en Altura
          </h3>
          <ul className="services__content__row2__list--special">
            {SpecialServicesData.map((item, index) => (
              <li
                className="services__content__row2__list--special__text"
                key={index}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
