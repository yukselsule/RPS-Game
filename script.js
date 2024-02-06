"use strict";

// Selecting elements
const choice = document.querySelectorAll(".choice");
const choice0 = document.querySelector(".choice-0");
const choice1 = document.querySelector(".choice-1");
const choice2 = document.querySelector(".choice-2");

const scoreOg = document.querySelector(".player--og--score");
const scorePc = document.querySelector(".player--pc--score");

const choiceOg = document.querySelector(".choice--og");
const choicePc = document.querySelector(".choice--pc");

const message = document.querySelector(".message");

const btnNewGame = document.querySelector(".btn__newgame");
const btnNewRound = document.querySelector(".btn__newround");

// Functions
const pcChoice = function () {
  const move = Math.trunc(Math.random() * 3) + 1;
  choicePc.src = `img/option${move}.png`;
};

// Starting conditions

let scores = [0, 0];

// resetting the scores
scoreOg.textContent = 0;
scorePc.textContent = 0;

choiceOg.src = `img/option.png`;
choicePc.src = `img/option.png`;

// Choosing a move

for (let i = 0; i < choice.length; i++) {
  choice[i].addEventListener("click", function () {
    choiceOg.src = `img/option${i + 1}.png`;
    pcChoice();
  });
}
