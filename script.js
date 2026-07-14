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

function capitalizeFirstLetter(text) {
    let firstLetter = text.substring(0, 1).toUpperCase();
    let remainingLetters = text.substring(1).toLowerCase();

    return firstLetter + remainingLetters;
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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(inHumanChoice, inComputerChoice) {
        let convertedHumanChoice = convertChoice(inHumanChoice);
        let convertedComputerChoice = convertChoice(inComputerChoice);

        switch (getResult(convertedHumanChoice, convertedComputerChoice)) {
            case 'draw':
                console.log("That's a draw!");
                break;
            case 'win':
                console.log(`You win! ${capitalizeFirstLetter(inHumanChoice)} beats ${capitalizeFirstLetter(inComputerChoice)}`);
                humanScore++;
                break;
            case 'loss':
                console.log(`You lose! ${capitalizeFirstLetter(inComputerChoice)} beats ${capitalizeFirstLetter(inHumanChoice)}`);
                computerScore++
                break;

            default:
                break;
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log(`You: ${humanScore} || Computer ${computerScore}`);

}