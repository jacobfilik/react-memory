import "./Card.css";
import React from "react";

class CardState {
  constructor(image, index, number, player) {
    this.image = image;
    this.index = index;
    this.number = number;
    this.matched = false;
    this.flipped = false;
    this.player = player;
  }
}

const Card = (props) => {
  var className = props.state.flipped ? "faceup" : "facedown";
  var innerClassName = "flip-card-inner";

  if (props.state.matched) {
    className = className + " matched";
    innerClassName = innerClassName + " matched-inner";
    if (props.state.player) {
      className = className + props.state.player;
      innerClassName = innerClassName + " " + props.state.player + "-inner";
    } else {
      innerClassName = innerClassName + " matched-inner";
    }
  }

  return (
    <div className={className} onClick={props.onClick}>
      <div className={innerClassName}>
        <div className="flip-card-front"></div>
        <div className="flip-card-back">
          <img src={props.state.image[1]} alt="" />
        </div>
      </div>
    </div>
  );
};

export { CardState, Card };
export default Card;
