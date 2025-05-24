function getComputerChoice() {
  const ComputerNum = Math.random() * 3;
  if (ComputerNum <= 1) {
    return "rock";
  } else if (ComputerNum <= 2) {
    return "paper";
  } else {
    return "scissor";
  }
}

let humanScore = 0;
let computerScore = 0;
const messageP = document.getElementById("message");
const scoreP = document.getElementById("score");
function playRound(humanChoice, computerChoice) {
  const beats = { rock: "scissor", scissor: "paper", paper: "rock" };

  if (computerScore > 4) {
    resultMessage = `Computer win ${computerScore}, game over`;
  } else if (humanScore > 4) {
    resultMessage = `You win ${humanScore}, game over`;
  } else if (humanChoice === computerChoice) {
    resultMessage = `You choose ${humanChoice}, computer choose ${computerChoice}, tie game`;
  } else if (beats[humanChoice] === computerChoice) {
    resultMessage = `You choose ${humanChoice}, computer choose ${computerChoice}, you win`;
    humanScore++;
  } else {
    resultMessage = `You choose ${humanChoice}, computer choose ${computerChoice}, you lose`;
    computerScore++;
  }
  messageP.textContent = resultMessage;
  scoreP.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
}
function handleChoiceClick() {
  const humanChoice = this.textContent.toLowerCase();
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
}
function resetScore() {
  humanScore = 0;
  computerScore = 0;
  messageP.textContent = "Choose your first move";
  scoreP.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
}
function setupGame() {
  const buttons = document.querySelectorAll(".choose");
  const reset = document.querySelector("#reset");
  reset.addEventListener("click", resetScore);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handleChoiceClick);
  }
  messageP.textContent = resultMessage;
  scoreP.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
}

function darkmode() {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    darkbtn.textContent = "Light mode";
  } else {
    darkbtn.textContent = "Dark mode";
  }
}

const body = document.body;
const darkbtn = document.querySelector("#dark");
darkbtn.addEventListener("click", darkmode);
setupGame();
// 5 games code
// function play(numPlay) {
//   // let numPlay = num
//   for (let i = 0; i < 5; i++) {
//     const human = getHumanChoice();
//     const computer = getComputerChoice();

//     playRound(human, computer);
//     console.log(`Score: human ${humanScore} - Computer ${computerScore}`);
//   }
// }
