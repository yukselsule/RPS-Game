"use strict";

// Selecting elements
const playerOg = document.querySelector(".player--og");
const playerPc = document.querySelector(".player--pc");

const choises = document.querySelectorAll(".choice");
const choice0 = document.querySelector(".choice-0");
const choice1 = document.querySelector(".choice-1");
const choice2 = document.querySelector(".choice-2");

const scoreOgEl = document.querySelector(".player--og--score");
const scorePcEl = document.querySelector(".player--pc--score");

const choiceOg = document.querySelector(".choice--og");
const choicePc = document.querySelector(".choice--pc");

const message = document.querySelector(".message");

const btnNewGame = document.querySelector(".btn__newgame");

// Functions
const pcChoice = function () {
  const move = Math.trunc(Math.random() * 3);
  choicePc.src = `img/option${move + 1}.png`;

  return move;
};

const loseCondition = function () {
  scores[1] = scores[1] + 1;
  scorePcEl.textContent = scores[1];

  playerPc.classList.add("winner");
  playerOg.classList.remove("winner");
};

// Starting conditions

let scores;

const init = function () {
  scores = [0, 0];

  // resetting the scores
  scoreOgEl.textContent = 0;
  scorePcEl.textContent = 0;

  choiceOg.src = `img/option.png`;
  choicePc.src = `img/option.png`;

  playerOg.classList.remove("winner");
  playerPc.classList.remove("winner");
};

init();

choises.forEach((choice, index) => {
  choice.addEventListener("click", function () {
    choiceOg.src = `img/option${index + 1}.png`;
    pcChoice();

    let playerOgChoiceNumber = Number(choice.dataset.choiceNumber);
    let playerOgChoice;

    if (playerOgChoiceNumber === 0) {
      playerOgChoice = "rock";
    } else if (playerOgChoiceNumber === 1) {
      playerOgChoice = "paper";
    } else if (playerOgChoiceNumber === 2) {
      playerOgChoice = "scissors";
    }

    console.log(playerOgChoiceNumber);
    console.log(playerOgChoice);

    let pcChoiceNumber = pcChoice();
    let playerPcChoice;

    if (pcChoiceNumber === 0) {
      playerPcChoice = "rock";
    } else if (pcChoiceNumber === 1) {
      playerPcChoice = "paper";
    } else if (pcChoiceNumber === 2) {
      playerPcChoice = "scissors";
    }

    console.log(pcChoiceNumber);
    console.log(playerPcChoice);

    //conditions

    if (playerOgChoice === playerPcChoice) {
      message.textContent = "Draw!";
      playerOg.classList.remove("winner");
      playerPc.classList.remove("winner");
    } else if (playerOgChoice === "rock" && playerPcChoice === "paper") {
      message.textContent = "You lose!";
      loseCondition();
    } else if (playerOgChoice === "paper" && playerPcChoice === "scissors") {
      message.textContent = "You lose!";
      loseCondition();
    } else if (playerOgChoice === "scissors" && playerPcChoice === "rock") {
      message.textContent = "You lose!";
      loseCondition();
    } else {
      message.textContent = "You win!";

      scores[0] = scores[0] + 1;
      scoreOgEl.textContent = scores[0];
      playerPc.classList.remove("winner");
      playerOg.classList.add("winner");
    }
  });
});

btnNewGame.addEventListener("click", init);
