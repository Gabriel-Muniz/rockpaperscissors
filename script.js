function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) {
        case 0:
            return 'rock'
            break;
        case 1:
            return 'paper'
            break;
        case 2:
            return 'scissors'
            break;
        default:
            break;
    }
}

function getHumanChoice() {
    let humanChoice;
    do {
        humanChoice = prompt("Choose your weapon").toLowerCase();

    } while (humanChoice !== 'rock'
    && humanChoice !== 'paper'
        && humanChoice !== 'scissors');

    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(inHumanChoice, inComputerChoice) {
    let convertedHumanChoice = convertChoice(inHumanChoice);
    let convertedComputerChoice = convertChoice(inComputerChoice);

    console.log(getResult(convertedHumanChoice, convertedComputerChoice));
}

function getResult(inHumanChoice, inComputerChoice) {
    let roundResult = inHumanChoice - inComputerChoice;

    switch (roundResult) {
        case 0:
            return "draw"
            break;
        case 1:
        case -2:
            return "win"
            break;
        case -1:
        case 2:
            return "loss"
        default:
            break;
    }
}


function convertChoice(choice) {
    if (choice == 'rock') {
        return 0;
    }
    else if (choice == 'paper') {
        return 1;
    } else {
        return 2;
    }
}