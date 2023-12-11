function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice == 0) {
        return "rock";
    }
    else if (randomChoice == 1) {
        return "paper";
    }
    else if (randomChoice == 2) {
        return "scissors";
    }
    else {
        return "Function not working";
    }
}

 function getPlayerChoice() {
    let playerChoice = prompt("Please write in the box below either Rock, Paper or Scissors").toLowerCase();
    return playerChoice;
 }  



let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("It's a tie!");
        return alert("It's a tie!");
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore++;
        console.log("You lose! Paper beats Rock");
        return alert("You lose! Paper beats Rock");
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        playerScore++
        console.log("You win! Rock beats Scissors");
        return alert("You win! Rock beats Scissors");
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore++;
        console.log("You win! Paper beats Rock");
        return alert("You win! Paper beats Rock");
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        computerScore++;
        console.log("You lose! Scissors beats Paper");
        return alert("You lose! Scissors beats Paper");
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerScore++;
        console.log("You lose! Rock beats Scissors");
        return alert("You lose! Rock beats Scissors");
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerScore++;
        console.log("You win! Scissors beats Paper");
        return alert("You win! Scissors beats Paper");
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection =  getPlayerChoice();
        playRound(playerSelection, computerSelection);
        console.log("Player score is: " + playerScore + " and" + " Computer Score is " + computerScore + " and i is " + i);
    }
    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game.");
        alert("Congratulations! You win the game.");
    }
    else {
        console.log("You lost! Try again.");
        alert("You lost! Try again.");
    }
    playerScore = 0;
    computerScore = 0;
    game();
}

game();
