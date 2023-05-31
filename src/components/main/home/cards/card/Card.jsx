import React from "react";
import "./_card.scss";
import config from "../../../../../config/config";

const Card = ({ img, title, description, link }) => {
  return (
    <div className="card">
      <img src={config.imagenBase + img} alt={title} className="card__img" />
      <h4 className="card__title">{title}</h4>
      <p className="card__description">{description}</p>
      <a href={link} className="card__link">
        CONTACTAR
      </a>
    </div>
  );
};

export default Card;
