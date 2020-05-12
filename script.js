function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];   
}

function getPlayerSelection() {
    let selection = prompt('Rock, paper, or scissors?');
    selection = selection.toLowerCase();

    while (selection !== 'rock' && selection !== 'paper' && selection !== 'scissors') {
        selection = prompt('Please enter a valid input: rock, paper, or scissors?');
        selection = selection.toLowerCase();     
    }
    return selection;
}

function playRound(playerSelection, computerSelection) {
    
    computerSelection = computerSelection.toLowerCase();

    let winner;

    switch(true) {
        case playerSelection === computerSelection:
            console.log(`You both picked ${playerSelection}, it's a tie!`);
            winner = 'none';
            break;
        case playerSelection === 'rock' && computerSelection === 'scissors':
            console.log(`Rock beats scissors, you win!`);
            winner = 'player'
            break;
        case playerSelection === 'rock' && computerSelection === 'paper':
            console.log(`Paper beats rock, you lose!`);
            winner = 'computer';
            break;
        case playerSelection === 'scissors' && computerSelection === 'paper':
            console.log(`Scissors cut paper, you win!`);
            winner = 'player';
            break;
        case playerSelection === 'scissors' && computerSelection === 'rock':
            console.log(`Rock beats scissors, you lose!`);
            winner = 'computer';
            break;
        case playerSelection === 'paper' && computerSelection === 'rock':
            console.log(`Paper beats rock, you win!`);
            winner = 'player';
            break;
        case playerSelection === 'paper' && computerSelection === 'scissors':
            console.log(`Scissors cut paper, you lose!`);
            winner = 'computer';
            break;
        default:
            console.log('Invalid input.');
            winner = 'none';
    }
    return winner;
}

function  game() {
    let playerScore = 0;
    let computerScore = 0;
    let result;

    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerSelection();
        let computerSelection = computerPlay();
        
        switch(playRound(playerSelection, computerSelection)){
            case 'player':
                playerScore += 1;
                break;
            case 'computer':
                computerScore += 1;
                break;
            case 'none':
                break;
        }
    }

    if (playerScore > computerScore) {
        result = `Your score: ${playerScore} || Computer score: ${computerScore}. You win!`;
    } else if ( computerScore > playerScore) {
        result = `Your score: ${playerScore} || Computer score: ${computerScore}. You lose!`;
    } else if (computerScore === playerScore) {
        result = `Your score: ${playerScore} || Computer score: ${computerScore}. Tie game!`;
    }

    console.log(result);
}


game();