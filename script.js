"use strict";

// Selecting elements
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
  const move = Math.trunc(Math.random() * 3) + 1;
  choicePc.src = `img/option${move}.png`;

  return move - 1;
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
};

// Choosing a move

for (let i = 0; i < choises.length; i++) {
  choises[i].addEventListener("click", function () {
    choiceOg.src = `img/option${i + 1}.png`;
    pcChoice();
  });
}

choises.forEach((choice) => {
  choice.addEventListener("click", function () {
    const playerChoiceNumber = Number(choice.dataset.choiceNumber);

    const pcChoiceNumber = pcChoice();

    console.log(`${playerChoiceNumber}`);
    console.log(`${pcChoiceNumber}`);

    //conditions

    if (playerChoiceNumber === pcChoiceNumber) {
      message.textContent = "Draw!";
    } else if (playerChoiceNumber === 0 && pcChoiceNumber === 1) {
      message.textContent = "You lose!";

      scores[1] = scores[1] + 1;
      scorePcEl.textContent = scores[1];
    } else if (playerChoiceNumber === 1 && pcChoiceNumber === 2) {
      message.textContent = "You lose!";

      scores[1] = scores[1] + 1;
      scorePcEl.textContent = scores[1];
    } else if (playerChoiceNumber === 2 && pcChoiceNumber === 0) {
      message.textContent = "You lose!";

      scores[1] = scores[1] + 1;
      scorePcEl.textContent = scores[1];
    } else {
      message.textContent = "You win!";

      scores[0] = scores[0] + 1;
      scoreOgEl.textContent = scores[0];
    }
  });
});

btnNewGame.addEventListener("click", init);
