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
