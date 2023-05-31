import React from "react";
import "./_cards.scss";
import { CardsData } from "../../../../assets/generators";
import Card from "./card/Card";

const Cards = () => {
  return (
    <div className="cards">
      <div className="cards__container">
        {CardsData.map((card) => (
          <Card key={CardsData.indexOf(card)} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
