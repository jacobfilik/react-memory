import "./CardGame.css";
import Card from "./Cards";
import getImageMap from "./CardUtils";

import { useState } from "react";
import React from "react";

function getCardArray() {
  const imageMap = getImageMap();
  return Array.from(Object.entries(imageMap));
}

const CardGameMatch = () => {
  const [gameId, setGameId] = useState(1);
  const cardArray = getCardArray();
  const cardIndices = getShuffledState(cardArray.length);
  return (
    <CardGame
      key={gameId}
      cardArray={cardArray}
      cardIndices={cardIndices}
      startNewGame={() => setGameId(gameId + 1)}
    />
  );
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function getShuffledState(nCards) {
  const indices = [...Array(nCards).keys(), ...Array(nCards).keys()];
  shuffleArray(indices);
  return indices;
}

const CardGame = (props) => {
  const cardIndices = props.cardIndices;

  const [flipped, setFlipped] = useState(
    new Array(cardIndices.length).fill(false)
  );
  const [matched, setMatched] = useState(
    new Array(cardIndices.length).fill(false)
  );

  const [clickLock, setClickLock] = useState(false);

  const onClick = (number) => {
    console.log("ONCLICK" + number);
    if (clickLock) {
      return;
    }

    if (flipped[number]) {
      return;
    }

    setClickLock(true);

    const f = [...flipped];
    f[number] = !f[number];

    setFlipped(f);

    const flippedIndices = [];
    const rawIndices = [];

    const l = f.filter((v, index) => {
      if (v === true && matched[index] === false) {
        rawIndices.push(index);
        flippedIndices.push(cardIndices[index]);
        return true;
      }

      return false;
    });

    const count = l.length;

    if (count === 2) {
      if (flippedIndices[0] === flippedIndices[1]) {
        const m = [...matched];
        m[rawIndices[0]] = true;
        m[rawIndices[1]] = true;
        setMatched(m);
      }

      const flipBack = () => {
        console.log("FLIP BACK");
        const f = [...matched];
        setFlipped(f);
        setClickLock(false);
      };

      setTimeout(flipBack, 2000);
    } else {
      setClickLock(false);
    }
  };

  return (
    <Cards
      cardArray={props.cardArray}
      cardIndices={cardIndices}
      flipped={flipped}
      matched={matched}
      onClick={onClick}
      startNewGame={props.startNewGame}
    />
  );
};

const Cards = (props) => {
  const createClick = (index) => props.onClick(index);
  const cardIndices = props.cardIndices;
  const cardArray = props.cardArray;

  //start to pass down state on props
  return (
    <div>
      <div>
        {cardIndices.map((cardIndex, index) => (
          <Card
            key={index}
            number={cardIndex}
            index={index}
            image={cardArray[cardIndex]}
            onClick={(e) => createClick(index)}
            flipped={props.flipped[index]}
            matched={props.matched[index]}
          />
        ))}
      </div>
      <div>
        <button className="play-again" onClick={props.startNewGame}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default CardGameMatch;
