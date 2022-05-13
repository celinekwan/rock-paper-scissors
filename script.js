console.log("Hello Word");
computerPlay();

function computerPlay() {
    let num = Math.floor(Math.random()*3 + 1);
    if (num === 1) {
        console.log("Rock");
        // return "Rock";
    } else if (num === 2) {
        console.log("Paper");
        //return "Paper";
    } else {
        console.log("Scissors");
        //return "Scissors";
    }
}

playRound("roCk","Rock");
playRound("Rock","Paper");
playRound("Rock","Scissors");
playRound("Paper","Rock");
playRound("Paper","Paper");
playRound("Paper","Scissors");
playRound("Scissors","Rock");
playRound("Scissors","Paper");
playRound("Scissors","Scissors");

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

function game() {
    let playerScore = 0, computerScore = 0;
    for (let i=0; i<5; i++) {
        let result = playRound("rock","paper"); 
        if (result==="player") {
            player++; 
        } else if (result==="computer") {
            computer++;
        }
    }
    if (player>computer) {
        return "player";
    } else if (player<computer) {
        return "computer";
    } else {
        return "tie";
    }
}