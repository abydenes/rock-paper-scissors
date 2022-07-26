let playerSelection;
let computerSelection;
let result = '';
let computerScore = 0;
let playerScore = 0;

const rockButton = document.querySelector('.rock')
rockButton.addEventListener('click', () => {
    playRound('rock', computerSelection)
    logScore();
});

const paperButton = document.querySelector('.paper')
paperButton.addEventListener('click', () => {
    playRound('paper', computerSelection)
    logScore();
});

const scissorsButton = document.querySelector('.scissors')
scissorsButton.addEventListener('click', () => {
    playRound('scissors', computerSelection)
    logScore();
});



function logScore() {
    div.textContent = `computer = ${computerScore} player = ${playerScore}`
}

const body = document.querySelector('body');
const div = document.createElement('div');
body.appendChild(div);

const div2 = document.createElement('div')
body.appendChild(div2);


function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    if (playerScore == 5 || computerScore == 5) {
        if (computerScore == 5) {
            div2.textContent = "Computer won the game!"
            return
        }
        else if (playerScore == 5) { 
            div2.textContent = "Player won the game!"
            return 
        }
    }
    if (playerSelection == computerSelection) result = 'Draw!';
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        result = 'Player won!';
        playerScore++
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        result = 'Player won!';
        playerScore++
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        result = 'Player won!';
        playerScore++
    }
    else {
        result = 'Computer won!';
        computerScore++
    }
}

function getComputerChoice() {
    let randomizer = Math.floor(Math.random() * 3);
    switch (randomizer) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            break;
    }
}g