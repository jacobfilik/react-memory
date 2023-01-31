import "./CardGame.css";
import { CardState } from "./Card";
import Cards from "./Cards";
import { getCardArray, getShuffledState } from "./CardUtils";

import { useState } from "react";
import React from "react";

const CardGameMatch = (props) => {
  const [gameId, setGameId] = useState(1);
  const cardArray = getCardArray();
  const cardIndices = getShuffledState(cardArray.length);
  return (
    <CardGame
      key={gameId}
      mode={props.mode}
      cardArray={cardArray}
      cardIndices={cardIndices}
      startNewGame={() => setGameId(gameId + 1)}
    />
  );
};

const PlayerLabel = (props) => {
  const className = "player";
  var class1 = className + " p1";
  var class2 = className + " p2";

  if (props.playerState.player === -1) {
    class1 = class1 + " inactive";
  } else {
    class2 = class2 + " inactive";
  }

  return (
    <>
      <div className="player-container">
        <div className={class1}>Player1</div>
        <div className={class2}>Player2</div>
      </div>
      <div className="player-container">
        <div className={class1}>{props.playerState.player1Score}</div>
        <div className={class1}>:</div>
        <div className={class2}>{props.playerState.player2score} </div>
      </div>
    </>
  );
};

const CardGame = (props) => {
  const cardIndices = props.cardIndices;

  const cardStates = cardIndices.map(
    (cardIndex, index) =>
      new CardState(props.cardArray[cardIndex], index, cardIndex, "")
  );

  const [cardStateObject, setCardState] = useState(cardStates);
  const [playerState, setPlayerState] = useState({
    player: props.mode === "twoplayer" ? 1 : 0,
    player1Score: 0,
    player2score: 0,
  });
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

        if (playerState.player === 1) {
          newCard.player = " playerone";
          other.player = " playerone";
        } else if (playerState.player === -1) {
          newCard.player = " playertwo";
          other.player = " playertwo";
        } else {
          newCard.player = " single";
          other.player = " single";
        }

        const updatedPlayer = { ...playerState };
        if (updatedPlayer.player === 1) {
          updatedPlayer.player1Score = updatedPlayer.player1Score + 1;
        } else {
          updatedPlayer.player2score = updatedPlayer.player2score + 1;
        }

        setPlayerState(updatedPlayer);
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
          const updatedPlayer = { ...playerState };
          updatedPlayer.player = updatedPlayer.player * -1;

          setPlayerState(updatedPlayer);
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
    <div>
      {props.mode === "twoplayer" ? (
        <PlayerLabel playerState={playerState} />
      ) : null}
      <Cards onClick={onClick} cardStates={cardStateObject} />
      <div>
        <button className="play-again" onClick={props.startNewGame}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export { PlayerLabel, CardGame };
export default CardGameMatch;
