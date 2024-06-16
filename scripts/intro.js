import typeanimation from "./typeanimation.js"
import timer from "./timer.js"

const sentence = document.querySelector("#text");
const prevButton = document.querySelector("#intro-prev");
const nextButton = document.querySelector("#intro-next");

const textArray = [
  "Welcome to my studio",
  "I am Aishik",
  "Artist and Developer",
  "Scroll down to know more",
];

typeanimation(sentence, textArray, prevButton, nextButton);
