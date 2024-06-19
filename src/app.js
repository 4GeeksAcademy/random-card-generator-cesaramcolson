/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let generateRandomIcon = () => {
  let icons = ["♦", "♥", "♠", "♣"];
  let indexIcons = Math.floor(Math.random() * icons.length);
  return icons[indexIcons];
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let sizeRelation = 250 / 370;
function updateHeightBasedOnWidth() {
  let widthInput = document.getElementById("widthInput");
  let heightInput = document.getElementById("heightInput");
  let width = parseFloat(widthInput.value);
  let height = width / sizeRelation;
  heightInput.value = height.toFixed(2);
  generateNewCard();
}

function updateWidthBasedOnHeight() {
  let widthInput = document.getElementById("widthInput");
  let heightInput = document.getElementById("heightInput");
  let height = parseFloat(heightInput.value);
  let width = height * sizeRelation;
  widthInput.value = width.toFixed(2);
  generateNewCard();
}

let generateNewCard = () => {
  let randomIcon = generateRandomIcon();
  let grabIcon = document.getElementsByClassName("icon");
  for (let i = 0; i < grabIcon.length; i++) {
    grabIcon[i].innerHTML = randomIcon;
    if (randomIcon === "♦" || randomIcon === "♥") {
      grabIcon[i].style.color = "red";
    } else {
      grabIcon[i].style.color = "black";
    }
  }

  document.querySelector("#number").innerHTML = generateRandomNumber();

  let width = document.getElementById("widthInput").value;
  let height = document.getElementById("heightInput").value;

  let card = document.getElementById("card");
  card.style.width = width + "px";
  card.style.height = height + "px";

  let iconSize = calculateFontSize(width, height, 0.3);
  let numberSize = calculateFontSize(width, height, 0.4);

  for (let icon of grabIcon) {
    icon.style.fontSize = iconSize + "px";
  }
  document.querySelector("#number").style.fontSize = numberSize + "px";
};

function calculateFontSize(width, height, ratio) {
  let minDimension = Math.min(width, height);
  return minDimension * ratio;
}

let startTimer = () => {
  setInterval(() => {
    generateNewCard();
  }, 5000);
};

window.onload = () => {
  generateNewCard();
  startTimer();

  document
    .getElementById("widthInput")
    .addEventListener("input", updateHeightBasedOnWidth);
  document
    .getElementById("heightInput")
    .addEventListener("input", updateWidthBasedOnHeight);
};

document
  .getElementById("generateButton")
  .addEventListener("click", generateNewCard);
