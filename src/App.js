import "./App.css";
import getImageMap from "./Cards";

import { useState } from "react";

var randomProperty = function (obj) {
  var keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
};

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
        <div className="flip-card-front"></div>
        <div className="flip-card-back">
          <img src={randomProperty(getImageMap())} alt="" />
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
