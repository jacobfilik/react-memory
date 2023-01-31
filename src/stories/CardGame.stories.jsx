import React from "react";
import { getCardArray, getShuffledState } from "../CardUtils";
import { CardGame } from "../CardGame";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/CardGame",
  component: CardGame,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

const newGame = () => {};

const cardData = getCardArray();

const gameState = {
  key: 1,
  mode: "oneplayer",
  cardArray: cardData,
  cardIndices: getShuffledState(cardData.length),
  startNewGame: newGame,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <CardGame
    key={gameState.key}
    mode={gameState.mode}
    cardArray={gameState.cardArray}
    cardIndices={gameState.cardIndices}
    startNewGame={gameState.startNewGame}
  />
);

export const Score = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Score.args = {
  player1Score: 0,
  player2Score: 0,
};
