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

function getCardArray() {
  const imageMap = getImageMap();
  return Array.from(Object.entries(imageMap));
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

export { getCardArray, getShuffledState };
