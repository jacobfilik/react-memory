import "./Cards.css";

class CardState {
  constructor(image, index, number) {
    this.image = image;
    this.index = index;
    this.number = number;
    this.matched = false;
    this.flipped = false;
  }
}

const Card = (props) => {
  const className = props.state.flipped ? "flipped-card" : "flip-card";

  return (
    <div
      className={props.state.matched ? "matched-card" : className}
      onClick={props.onClick}
    >
      <div
        className={props.state.matched ? "match-card-inner" : "flip-card-inner"}
      >
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
