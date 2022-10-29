import "./Cards.css";

const Card = (props) => {
  const className = props.flipped ? "flipped-card" : "flip-card";

  return (
    <div
      className={props.matched ? "matched-card" : className}
      onClick={props.onClick}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front"></div>
        <div className="flip-card-back">
          <img src={props.image[1]} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
