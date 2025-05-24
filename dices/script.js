const dicePng = {
  1: "./images/dice1.png",
  2: "./images/dice2.png",
  3: "./images/dice3.png",
  4: "./images/dice4.png",
  5: "./images/dice5.png",
  6: "./images/dice6.png",
};

const btn = document.querySelector("#start");
const container = document.querySelector(".container");
const dicePlayer1 = document.querySelector(".img1");
const dicePlayer2 = document.querySelector(".img2");
const result = document.querySelector("h1");
// result.classList.add("result");

function dices() {
  const num1 = Math.ceil(Math.random() * 6);
  const num2 = Math.ceil(Math.random() * 6);
  dicePlayer1.setAttribute("src", dicePng[num1]);
  dicePlayer2.setAttribute("src", dicePng[num2]);
  if (num1 == num2) {
    result.textContent = "It's a tie game";
  } else if (num1 > num2) {
    result.textContent = "Player 1 wins";
  } else {
    result.textContent = "player2 wins";
  }
}

btn.addEventListener("click", dices);
// container.appendChild(result);
