// Get a random number from 0 to 3;
let getRandomNumber = () => Math.floor((Math.random() * 3) + 1)
// Get a choice between rock, paper and scissor using the random number
let pieces = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  let computerChoice = getRandomNumber();
  return computerChoice;
}