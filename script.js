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
  } while (!checkHumanChoice(humanChoice));//Check if prompt is valid. Will repeat until

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

const humanSelection = getHumanChoice;
const computerSelection = getComputerChoice;

function playRound(humanChoice, computerChoice) {
  let result = pieces.indexOf(humanChoice) + 1 - computerChoice;
  let winner = checkWinner(result);

  logResult(winner, humanChoice, pieces[computerChoice - 1]);
}

function checkWinner(result) {
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
  
  console.log(resultMessages[result]);
}
