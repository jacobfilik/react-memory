import "./CardGame.css";
import { Card, CardState } from "./Cards";
import { getCardArray, getShuffledState } from "./CardUtils";

import { useState } from "react";
import React from "react";

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

const CardGame = (props) => {
  const cardIndices = props.cardIndices;

  const cardStates = cardIndices.map(
    (cardIndex, index) =>
      new CardState(props.cardArray[cardIndex], index, cardIndex)
  );

  const [cardStateObject, setCardState] = useState(cardStates);

  const [clickLock, setClickLock] = useState(false);

  const onClick = (i) => {
    if (clickLock) {
      return;
    }

    if (cardStateObject[i].flipped) {
      return;
    }

    setClickLock(true);

    const newState = [...cardStateObject];
    const newCard = newState[i];

    newCard.flipped = true;

    const otherCard = newState.filter((card) => {
      if (card.flipped && !card.matched && card.index !== newCard.index) {
        return true;
      }
      return false;
    });

    if (otherCard.length !== 0) {
      const other = otherCard[0];
      if (other.number === newCard.number) {
        other.matched = true;
        newCard.matched = true;
        setCardState(newState);
        setClickLock(false);
      } else {
        const flipBack = () => {
          const newState = [...cardStateObject];
          const newCard2 = { ...newState[newCard.index] };
          const newOther = { ...newState[other.index] };
          newCard2.flipped = false;
          newOther.flipped = false;
          newState[newCard2.index] = newCard2;
          newState[newOther.index] = newOther;

          setCardState(newState);
          setClickLock(false);
        };
        setTimeout(flipBack, 2000);
      }
    } else {
      setCardState(newState);
      setClickLock(false);
    }
  };

  return (
    <Cards
      onClick={onClick}
      startNewGame={props.startNewGame}
      cardStates={cardStateObject}
    />
  );
};

const Cards = (props) => {
  const createClick = (index) => props.onClick(index);

  //start to pass down state on props
  return (
    <div>
      <div>
        {props.cardStates.map((cardState, index) => (
          <Card
            key={index}
            state={cardState}
            onClick={(e) => createClick(index)}
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
