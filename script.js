//Global score variables
let humanScore = 0;
let computerScore = 0;

// Get a random number from 0 to 3;
let getRandomNumber = () => Math.floor(Math.random() * 3 + 1);
// Get a choice between rock, paper and scissor using the random number
let pieces = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let computerChoice = getRandomNumber();
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice;
  do {
    humanChoice = prompt("Rock, paper or scissors?").toLowerCase();
  } while (!checkHumanChoice(humanChoice)); //Check if prompt is valid. Will repeat until

  return humanChoice;
}

function checkHumanChoice(humanChoice) {
  if (
    humanChoice == "rock" &&
    humanChoice == "paper" &&
    humanChoice == "scissors"
  ) {
    return false;
  }
  return true;
}

function checkRoundWinner(result) {
  if (result == 0) {
    //Draw
    return 0;
  } else if (result == 1 || result == -2) {
    //Win
    humanScore++;
    return 1;
  } else {
    //Lose
    computerScore++;
    return 2;
  }
}

function logResult(result, humanChoice, computerChoice) {
  let resultMessages = [
    `That's a draw! Both choosed ${humanChoice}`,
    `You won! ${humanChoice} beats ${computerChoice}`,
    `You lose! ${computerChoice} beats ${humanChoice}`,
  ];

  roundResult.textContent = resultMessages[result];
}
const humanSelection = getHumanChoice;
const computerSelection = getComputerChoice;

function playRound(humanChoice, computerChoice) {
  let result = pieces.indexOf(humanChoice) + 1 - computerChoice;
  let winner = checkRoundWinner(result);

  logResult(winner, humanChoice, pieces[computerChoice - 1]);
}

function playGame() {
  playRound(humanSelection(), computerSelection());

  if (humanScore > computerScore) {
    console.log("Congrats! You've won!");
    return;
  } else if (humanScore == computerScore) {
    console.log("That's a big draw...");
    return;
  }
  console.log("Oof! You've lost!");
}

const buttons = document.querySelectorAll(".choices>.btn-choice");

buttons.forEach((btnChoice) => {
  btnChoice.addEventListener("click", () => {
    playRound(btnChoice.id, computerSelection());
    updateScore();

    if (checkGameWinner()) {
      disableButtons();


      gameWinner.textContent =
        humanScore == 5 ? "CONGRATS! You won!" : "Oh nooo... You lose D:";
      resetButton();
      roundResult.textContent = "";
    }
  });
});

const roundResult = document.querySelector(".round-result");

function updateScore() {
  const outPlayerScore = document.querySelector(".player-score>.outScore");
  const outComputerScore = document.querySelector(".computer-score>.outScore");

  outPlayerScore.textContent = humanScore;
  outComputerScore.textContent = computerScore;
}

function checkGameWinner() {
  if (!(humanScore == 5 || computerScore == 5)) {
    return false;
  }

  return true;
}

function disableButtons() {
  buttons.forEach((btn) => {
    btn.disabled = true;
  });
}

function enableButtons(){
  buttons.forEach((btn) => {
    btn.disabled = false;
  })
}
const gameWinner = document.querySelector(".game-result");
const resultContainer = document.querySelector('.results');
const resetGame = document.querySelector(".btn-reset");
resetGame.remove();

function resetButton() {
  resultContainer.append(resetGame);
}

resetGame.addEventListener('click', () => {
  humanScore = 0;
  computerScore = 0;
  enableButtons()
  updateScore();
  resetGame.remove();
  gameWinner.textContent = '';
})