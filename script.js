const playerSelection = "rock";
const computerSelection = getComputerChoice();

function getComputerChoice() {
    let randomizer = Math.floor(Math.random() * 3);
    switch (randomizer) {
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors';
            break;
        default:
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionInsens = playerSelection.toLowerCase();
    let computerSelectionInsens = computerSelection.toLowerCase();

    if (playerSelectionInsens === computerSelectionInsens) {
        return "It's a draw!"
    } else if (playerSelectionInsens === 'rock') {
        if (computerSelectionInsens === 'paper') {
            return 'You lose! Paper beats Rock!';
        } else return 'You win! Rock beats Scissors!';
    } else if (playerSelectionInsens === 'paper') {
        if (computerSelectionInsens === 'scissors') {
            return 'You lose! Scissors beats Paper!';
        } else return 'You win! Paper beats Rock!';
    } else if (playerSelectionInsens === 'scissors') {
        if (computerSelectionInsens === 'rock') {
            return 'You lose! Rock beats scissors!';
        } else return 'You win! Scissors beats Paper!';
    }
}
console.log(playRound(playerSelection, computerSelection));
