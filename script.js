function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  return randomNumber == 0 ? "rock" : randomNumber == 1 ? "paper" : "scissors"
}

let playerScore = 0;
let computerScore = 0;
let result = "";
const buttons = document.querySelectorAll('button');
const div = document.querySelector(".result");
let para = document.createElement("p");
para.className = "para"

function playRound(playerSelection, computerSelection) {
  if (playerScore == 5) {
    para.innerText = "Player won the game!";
    return
  } else if (computerScore == 5) {
    para.innerText = "Computer won the game!";
    return
  }
  if (playerSelection == computerSelection) result = "It's a draw";
  else if ((playerSelection == 'rock' && computerSelection == 'scissors')
    || (playerSelection == 'paper' && computerSelection == 'rock')
    || (playerSelection == 'scissors' && computerSelection == 'paper')) {
    result = 'Player won!';
    playerScore++;
  } else {
    result = 'Computer won!';
    computerScore++;
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.id == "reset") {
      playerScore = 0;
      computerScore = 0;
      result = "";
      para.innerText = "";
      displayScores();
      return
    }
    playRound(button.id, getComputerChoice());
    displayScores();
  });
});

function displayScores() {
  div.innerText = `Player = ${playerScore} Computer = ${computerScore} \n ${result}`
  div.appendChild(para)
}

