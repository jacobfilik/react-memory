import Card from "./Cards";

import star from "./images/star.svg";
import heart from "./images/heart.svg";
import bee from "./images/bee.svg";
import bolt from "./images/bolt.svg";
import bunny from "./images/bunny.svg";
import drop from "./images/drop.svg";
import happy from "./images/happy.svg";
import leaf from "./images/leaf.svg";
import letter from "./images/letter.svg";
import paw from "./images/paw.svg";

import { useState } from "react";
import React from "react";

function getCardArray() {
  const imageMap = getImageMap();
  return Array.from(Object.entries(imageMap));
}

function getImageMap() {
  return {
    heart,
    star,
    bee,
    bolt,
    bunny,
    drop,
    happy,
    leaf,
    letter,
    paw,
  };
}

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
  const cardArray = getCardArray();

  const [cardIndices, setCardIndices] = useState(
    getShuffledState(cardArray.length)
  );

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
      cardArray={cardArray}
      cardIndices={cardIndices}
      flipped={flipped}
      matched={matched}
      onClick={onClick}
    />
  );
};

const Cards = (props) => {
  //const { cardList, flipped, onClick } = useGameState();

  const createClick = (index) => props.onClick(index);

  //var cardList = getCardStates();

  const cardIndices = props.cardIndices;
  const cardArray = props.cardArray;

  //start to pass down state on props
  return (
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
  );
};

export default CardGame;
