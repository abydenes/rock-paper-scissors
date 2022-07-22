//let playerSelection = prompt("rock paper scissors?".toLowerCase());
let playerSelection = 'rock';
let computerSelection = getComputerChoice();

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
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) return 'Draw!';
    if (playerSelection == 'rock' && computerSelection == 'scissors') return 'Player won!';
    else if (playerSelection == 'paper' && computerSelection == 'rock') return 'Player won!';
    else if (playerSelection == 'scissors' && computerSelection == 'paper') return 'Player won!';
    else return 'Computer won!';
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound(playerSelection, computerSelection);
        computerSelection = getComputerChoice();
        console.log(`Round: ${i} => ${result}`);

        if (result == 'Player won!') {
            playerScore++
        } else if (result == 'Computer won!') {
            computerScore++
        };
    }

    if (playerScore > computerScore) {
        console.log("Player won the game!");
    } else if (computerScore > playerScore) {
        console.log("Computer won the game!");
    } else console.log("DRAW!")
}

game();