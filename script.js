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
  } while (checkHumanChoice(humanChoice));

  return humanChoice;
}

function checkHumanChoice(humanChoice) {
  if (
    humanChoice != "rock" &&
    humanChoice != "paper" &&
    humanChoice != "scissors"
  ) {
    return true;
  }
  return false;
}
