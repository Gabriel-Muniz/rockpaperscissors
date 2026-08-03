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
    return `${text[0].toUpperCase()}${text.slice(1)}`;
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

function playRound(inHumanChoice, inComputerChoice) {
    let convertedHumanChoice = convertChoice(inHumanChoice);
    let convertedComputerChoice = convertChoice(inComputerChoice);

    switch (getResult(convertedHumanChoice, convertedComputerChoice)) {
        case 'draw':
            console.log(convertedComputerChoice, convertedHumanChoice)
            updateRoundLog("That's a draw!");
            break;
        case 'win':
            updateRoundLog(`You win! ${capitalizeFirstLetter(inHumanChoice)} beats ${capitalizeFirstLetter(inComputerChoice)}`);
            scoreHandler()
            updateScore()
            break;
        case 'loss':
            updateRoundLog(`You lose! ${capitalizeFirstLetter(inComputerChoice)} beats ${capitalizeFirstLetter(inHumanChoice)}`);
            scoreHandler(false)
            updateScore(false)
            break;

        default:
            break;
    }
}

let humanScore = 0;
let computerScore = 0;

const scoreHandler = (isPlayer = true) => {
    return (isPlayer) ? humanScore++ : computerScore++;
}

/* UI IMPLEMENTATION */
const choiceBtn = document.querySelectorAll(".choice-btn");
const roundLog = document.querySelector('.round-log');

const checkWinner = () => {
    return (humanScore != 5 && computerScore !== 5) ? false : true;
}

const winnerHandler = () => {
    const winnerContainer = document.createElement('div');
    winnerContainer.classList.add('winner-container')
    const gameContainer = document.querySelector('.game-container');

    const replayContainer = document.createElement('div');
    replayContainer.classList.add('replay-container')
    const replayBtn = document.createElement('button');

    if (humanScore > computerScore) {
        console.log('alo')
        winnerContainer.textContent = `Congrats you won!`
    } else {
        console.log('alo')
        winnerContainer.textContent = `The computer got you this time. Wanna try again?`
    }

    gameContainer.append(winnerContainer);
    winnerContainer.append(replayContainer)

    choiceBtn.forEach(btn => {
        btn.disabled = true;
    })



    replayBtn.addEventListener('click', () => {
        resetScore();

        gameContainer.removeChild(winnerContainer);
        winnerContainer.textContent = '';

        updateRoundLog('Choose your weapon!')

        choiceBtn.forEach(btn => {
            btn.disabled = false;
        })
    })

    replayBtn.textContent = "Play again"
    replayContainer.append(replayBtn)
}

const updateRoundLog = (string) => { roundLog.textContent = string };

const updateScore = (isPlayer = true) => {
    const outPlayerScore = document.querySelector('.player-section>.score');
    const outComputerScore = document.querySelector('.computer-section>.score');

    isPlayer ? outPlayerScore.textContent = humanScore :
        outComputerScore.textContent = computerScore
}

const resetScore = () => {
    humanScore = 0;
    computerScore = 0;

    const outComputerScore = document.querySelector('.player-section > .score');
    const outPlayerScore = document.querySelector('.computer-section > .score');

    outComputerScore.textContent = humanScore;
    outPlayerScore.textContent = humanScore;
}

choiceBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        playRound(btn.dataset.value, getComputerChoice());
        if (checkWinner()) {
            winnerHandler();
        }
    })
})