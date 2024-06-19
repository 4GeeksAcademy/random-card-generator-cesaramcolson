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
};

let startTimer = () => {
  setInterval(() => {
    generateNewCard();
  }, 5000);
};

window.onload = () => {
  generateNewCard();
  startTimer();
};

document
  .getElementById("generateButton")
  .addEventListener("click", generateNewCard);
