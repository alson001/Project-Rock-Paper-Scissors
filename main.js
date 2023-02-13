function getComputerChoice() {
    index = Math.random() * 3
    roundedIndex = Math.floor(index)
    switch (roundedIndex) {
        case 0:
            return 'rock'
            break;
        case 1:
            return 'paper'
            break;
        default:
            return 'scissors'
    }
}

function play(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            return "It's a draw! Rock and Rock."
        } else if (computerSelection == 'paper') {
            return "You Lose! Rock lost to Paper."
        } else {
            return "You Won! Rock beats Scissors."
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return "You Won! Paper beats Rock."
        } else if (computerSelection == 'paper') {
            return "It's a draw! Paper and Paper."
        } else {
            return "You Lose! Paper lost to Scissors."
        }
    } else {
        if (computerSelection == 'rock') {
            return "You Lose! Scissors lost to Rock."
        } else if (computerSelection == 'paper') {
            return "You Won! Scissors beats Paper."
        } else {
            return "It's a draw! Scissors and Scissors."
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Enter Rock, Paper or Scissors")
        console.log(play(playerSelection, getComputerChoice()))
    }
}