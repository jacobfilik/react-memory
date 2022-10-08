import "./Cards.css";

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

import React from "react";
import { useState } from "react";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function getCardStates() {
  const imageMap = getImageMap();
  const imageArray = Array.from(Object.entries(imageMap));
  const imageArrayCopy = [...imageArray];
  const imarray = imageArray.concat(imageArrayCopy);
  shuffleArray(imarray);
  return imarray;
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

const Card = (props) => {
  // const [flipped, setFlipped] = useState(false);
  // const handleClick = () => {
  //   setFlipped(!flipped);
  //   console.log("click " + props.number);
  // };

  return (
    <div
      className={props.flipped ? "flipped-card" : "flip-card"}
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

// const useGameState = () => {
// return { cardList, flipped, onClick };
// };

const CardGame = (props) => {
  //const { createGame, onClick } = useGameState();
  //var { cardList, flipped } = createGame();
};

const Cards = (props) => {
  console.log("Create state");

  const [cardList, setCardList] = useState(getCardStates());

  const [flipped, setFlipped] = useState(
    new Array(cardList.length).fill(false)
  );
  const [matched, setMatched] = useState(
    new Array(cardList.length).fill(false)
  );

  const onClick = (number) => {
    console.log("ONCLICK" + number);
    const f = [...flipped];
    f[number] = !f[number];

    const count = f.filter((v) => v === true).length;

    if (count === 2) {
      f.fill(false);
    }

    setFlipped(f);
  };

  return <CardsInner cardList={cardList} flipped={flipped} onClick={onClick} />;
};

const CardsInner = (props) => {
  //const { cardList, flipped, onClick } = useGameState();

  const createClick = (index) => props.onClick(index);
  console.log(props);

  //var cardList = getCardStates();

  const cl = props.cardList;

  const onClick1 = (index) => console.log(index);
  //start to pass down state on props
  return (
    <div>
      {cl.map((image, index) => (
        <Card
          key={index}
          number={index}
          image={image}
          onClick={(e) => createClick(index)}
          flipped={props.flipped[index]}
        />
      ))}
    </div>
  );
};

export default Cards;
