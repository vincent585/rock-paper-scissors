function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];   
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let winner;

    switch(true) {
        case playerSelection === computerSelection:
            winner = `You both picked ${playerSelection}, it's a tie!`;
            break;
        case playerSelection === 'rock' && computerSelection === 'scissors':
            winner = `Rock beats scissors, you win!`;
            break;
        case playerSelection === 'rock' && computerSelection === 'paper':
            winner = `Paper beats rock, you lose!`;
            break;
        case playerSelection === 'scissors' && computerSelection === 'paper':
            winnner = `Scissors cut paper, you win!`;
            break;
        case playerSelection === 'scissors' && computerSelection === 'rock':
            winner = `Rock beats scissors, you lose!`;
            break;
        case playerSelection === 'paper' && computerSelection === 'rock':
            winner = `Paper beats rock, you win!`;
            break;
        case playerSelection === 'paper' && computerSelection === 'scissors':
            winner = `Scissors cut paper, you lose!`;
            break;
        default:
            winner = 'Invalid input';
    }
    return winner;
}

const playerSelection =  prompt('Please enter rock, paper, or scissors.')
const computerSelection = computerPlay();