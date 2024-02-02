import { Card } from "./Card";
import React from "react";

const Cards = (props) => {
  const createClick = (index) => props.onClick(index);

  return (
    <div className="card-container">
      {props.cardStates.map((cardState, index) => (
        <Card
          key={index}
          state={cardState}
          onClick={(e) => createClick(index)}
        />
      ))}
    </div>
  );
};

export default Cards;
