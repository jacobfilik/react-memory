import "./App.css";
import star from "./images/star.svg";
import heart from "./images/heart.svg";

import { useState } from "react";

const Card = (props) => {
  const [flipped, setFlipped] = useState(false);
  const handleClick = () => {
    setFlipped(!flipped);
    console.log("click");
  };

  return (
    <div
      className={flipped ? "flipped-card" : "flip-card"}
      onClick={handleClick}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={star} alt="" />
        </div>
        <div className="flip-card-back">
          <img src={heart} alt="" />
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="game">
      <div>
        {[...Array(54).keys()].map((number) => (
          <Card key={number} />
        ))}
      </div>
    </div>
  );
}

export default App;
