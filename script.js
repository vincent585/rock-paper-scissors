const choiceButtons = document.querySelectorAll('.option');
const playerScoreDiv = document.querySelector('#player-score');
const computerScoreDiv = document.querySelector('#computer-score');
const roundResultDiv = document.querySelector('#round-result');
const resetButton = document.querySelector('#reset');

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];   
}


function playRound(playerSelection, computerSelection) {
    switch(true) {
        case playerSelection === computerSelection:
            roundResultDiv.textContent = `You both picked ${playerSelection}, it's a tie!`;
            break;
        case playerSelection === 'rock' && computerSelection === 'scissors':
            roundResultDiv.textContent = `Rock beats scissors, you win!`;
            playerScore++;
            playerScoreDiv.textContent = `Your Score: ${playerScore}`;
            break;
        case playerSelection === 'rock' && computerSelection === 'paper':
            roundResultDiv.textContent = `Paper beats rock, you lose!`;
            computerScore++;
            computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
            break;
        case playerSelection === 'scissors' && computerSelection === 'paper':
            roundResultDiv.textContent = `Scissors cut paper, you win!`;
            playerScore++;
            playerScoreDiv.textContent = `Your Score: ${playerScore}`;
            break;
        case playerSelection === 'scissors' && computerSelection === 'rock':
            roundResultDiv.textContent = `Rock beats scissors, you lose!`;
            computerScore++;
            computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
            break;
        case playerSelection === 'paper' && computerSelection === 'rock':
            roundResultDiv.textContent = `Paper beats rock, you win!`;
            playerScore++;
            playerScoreDiv.textContent = `Your Score: ${playerScore}`;
            break;
        case playerSelection === 'paper' && computerSelection === 'scissors':
            roundResultDiv.textContent = `Scissors cut paper, you lose!`;
            computerScore++;
            computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
            break;
        default:
            roundResultDiv.textContent = 'Something went wrong...';
    }
    return [playerScore, computerScore];
}

function resetGame() {
    resetButton.addEventListener('click', () => {
        window.location.reload();
    });
}

function endGame() {
    if (playerScore === 5 || computerScore === 5) {
        choiceButtons.forEach(button => {
            button.setAttribute('disabled', '');
        });
        roundResultDiv.textContent = 'Game over. Press the "reset" button to play again.';
    }
}

function playGame() {
    let playerSelection;
    choiceButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const choiceIcons = document.querySelectorAll('i');
            if (button.classList.contains('rock-button')) {
                playerSelection = 'rock';
            } else if (button.classList.contains('paper-button')) {
                playerSelection = 'paper';
            } else if (button.classList.contains('scissors-button')) {
                playerSelection = 'scissors';
            }
            playRound(playerSelection, computerPlay());
            endGame(playerScore, computerScore);
            resetGame();
        });
    });
}

playGame();


