"use strict";
/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "🎉 Correct Number!";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 12;

console.log((document.querySelector(".guess").value = 2));
console.log(document.querySelector(".guess").value);

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When ther is no guess
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ No number!";

    // When the player guess is correct
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";

    //Setting the highest score to highest one
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //when the guessed number is different
  } else if (guess !== secretNumber) {
    guess > secretNumber
      ? (document.querySelector(".message").textContent = "📈 Too high!")
      : (document.querySelector(".message").textContent = "📉 Too low!");
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(".message").textContent = "😭 You lost the game";
  }
  //     // When the guessed number is big
  //   } else if (guess > secretNumber) {
  //     if (score > 0) {
  //       document.querySelector(".message").textContent = "📈 Too high!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "😭 You lost the game";
  //     }

  //     // when the guessed number is smller
  //   } else if (guess < secretNumber) {
  //     if (score > 0) {
  //       document.querySelector(".message").textContent = "📉 Too low!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "😭 You lost the game";
  //     }
  //   }
});

// When again is clicked(reset every thing)
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".number").textContent = secretNumber;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".number").style.width = "15rem";
});
