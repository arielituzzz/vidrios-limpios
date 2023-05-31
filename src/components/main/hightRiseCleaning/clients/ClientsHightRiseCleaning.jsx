import React from "react";
import "./_clientsHightRiseCleaning.scss";
import { ClientsData } from "../../../../assets/generators";

const ClientsHightRiseCleaning = () => {
  return (
    <div className="clientsHightRiseCleaning">
      <div className="clientsHightRiseCleaning__content">
        <div className="clientsHightRiseCleaning__content__row1">
          <h5 className="clientsHightRiseCleaning__content__row1__title">
            Clientes que pueden dar referencias sobre nuestra calidad de
            servicios de limpieza y mantenimiento integral
          </h5>
        </div>
        <div className="clientsHightRiseCleaning__content__row2">
          <ul className="clientsHightRiseCleaning__content__row2__list">
            {ClientsData.map(
              (item, index) => index <= 7 && <li key={index}>{item.name}</li>
            )}
          </ul>
          <ul className="clientsHightRiseCleaning__content__row2__list">
            {ClientsData.map(
              (item, index) =>
                index > 7 && index <= 15 && <li key={index}>{item.name}</li>
            )}
          </ul>
          <ul className="clientsHightRiseCleaning__content__row2__list">
            {ClientsData.map(
              (item, index) =>
                index > 15 && index <= 23 && <li key={index}>{item.name}</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClientsHightRiseCleaning;
