console.log(`The Overall Winner is: ${game()}!`);

// generate random number between 1 and 3 to return computer move: rock/paper/scissors
function computerPlay() { 
    let num = Math.floor(Math.random()*3 + 1);
    if (num === 1) {
        //console.log("Rock");
        return "Rock";
    } else if (num === 2) {
        //console.log("Paper");
        return "Paper";
    } else {
        //console.log("Scissors");
        return "Scissors";
    }
}

// returns whether player or computer wins the round
function playRound(playerSelection, computerSelection) {
    
    // tie
    if (playerSelection===computerSelection) {
        console.log("Tie!")
        return "tie";
    }
    // paper > rock
    else if (playerSelection==="paper") {
        if (computerSelection==="rock") {
            console.log("You Win! Paper beats Rock");
            return "player";
        } else { // computer === scissors
            console.log("You Lose! Scissors beats Paper");
            return "computer";
        }
    }
    // rock > scissors
    else if (playerSelection==="rock") {
        if (computerSelection==="scissors") {
            console.log("You Win! Rock beats Scissors");
            return "player";
        } else { // computer === paper
            console.log("You Lose! Paper beats Rock");
            return "computer";
        }
    }
    // scissors > paper 
    else if (playerSelection==="scissors") {
        if (computerSelection==="paper") {
            console.log("You Win! Scissors beats Paper");
            return "player";
        } else { // computer === Rock
            console.log("You Lose! Rock beats Scissors");
            return "computer";
        }
    }

}

// play 5 rounds of rock-paper-scissors and display winner
function game() {
    let playerScore = 0, computerScore = 0;
    for (let i=0; i<5; i++) { // play 5 rounds
        let playerMove = prompt("Enter paper/scissors/rock: ").toLowerCase();
        let computerMove = computerPlay().toLowerCase();

        console.log(`Round ${i+1} \tPlayer: ${playerMove}, Computer: ${computerMove}`);

        let result = playRound(playerMove,computerMove); 
        // increment points for winner of round
        if (result==="player") {
            playerScore++; 
        } else if (result==="computer") {
            computerScore++;
        }
    }
    // determine player or computer as winner
    if (playerScore>computerScore) {
        return "player";
    } else if (playerScore<computerScore) {
        return "computer";
    } else {
        return "tie";
    }
}