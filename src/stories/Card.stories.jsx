import React from "react";

import { Card, CardState } from "../components/Card";
import { getCardArray } from "../components/CardUtils";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Card",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

const imageArray = getCardArray();
const state = new CardState(imageArray[0], 0, 0, "");
const click = () => {};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <Card index={0} state={{ ...state, ...args }} onClick={click} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  flipped: false,
};

export const Flipped = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Flipped.args = {
  flipped: true,
};

export const Matched = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Matched.args = {
  matched: true,
  flipped: true,
};

export const PlayerOne = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PlayerOne.args = {
  matched: true,
  flipped: true,
  player: " playerone",
};

export const PlayerTwo = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PlayerTwo.args = {
  matched: true,
  flipped: true,
  player: " playertwo",
};
