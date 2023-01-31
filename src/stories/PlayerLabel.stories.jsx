import React from "react";

import { PlayerLabel } from "../CardGame";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/PlayerLabel",
  component: PlayerLabel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

const playerState = {
  player: "twoplayer",
  player1Score: 0,
  player2score: 0,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <PlayerLabel playerState={{ ...playerState, ...args }} />
);

export const Score = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Score.args = {
  player1Score: 0,
  player2Score: 0,
};
