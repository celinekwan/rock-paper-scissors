// generate random number between 1 and 3 to return computer move: rock/paper/scissors
function computerPlay() { 
    let num = Math.floor(Math.random()*3 + 1);
    if (num === 1) {
        return "Rock";
    } else if (num === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// play 5 rounds of rock-paper-scissors and display winner
function game() {

    let playerScore = 0, computerScore = 0, round = 1;

    const buttons = document.querySelector('.btns');
    buttons.style.padding = '5px 0';

    const container = document.querySelector("body");

    const roundNum = document.createElement("div");
    const div = document.createElement("div");
    div.style.margin = '5px 0'; 
    const roundResult = document.createElement("div");
    roundResult.style.margin = '5px 0'; 
    const roundScore = document.createElement("div");
    roundScore.style.margin = '5px 0'; 

    container.appendChild(roundNum);
    container.appendChild(div);
    container.appendChild(roundResult); 
    container.appendChild(roundScore);
    
    const playGame = () => {
        const btn1 = document.querySelector("#rock");
        const btn2 = document.querySelector("#paper");
        const btn3 = document.querySelector("#scissors");
        let plays = [btn1,btn2,btn3];  


        plays.forEach(option => {
            option.addEventListener('click', function() {
                let player = this.innerText.toLowerCase();
                let computer = computerPlay().toLowerCase()

                roundNum.innerText = `round ${round.toString()}`; 
                div.innerText = `player move: ${player} \ncomputer move: ${computer}`;

                playRound(player, computer);

                roundScore.innerText = `player score: ${playerScore}\ncomputer score: ${computerScore}`;

                if (playerScore >= 5 || computerScore >= 5) {
                    winner(); 
                }

                round++; 

            })
        })
    }

    
    // returns whether player or computer wins the round
    const playRound = (playerSelection, computerSelection) => {
        
        // tie
        if (playerSelection===computerSelection) {
            roundResult.innerText = 'Tie'; 
        }
        // paper > rock
        else if (playerSelection==="paper") {
            if (computerSelection==="rock") {
                roundResult.innerText = "You Win! Paper beats Rock";
                playerScore++;
            } else { // computer === scissors
                roundResult.innerText = "You Lose! Scissors beats Paper";
                computerScore++; 
            }
        }
        // rock > scissors
        else if (playerSelection==="rock") {
            if (computerSelection==="scissors") {
                roundResult.innerText = "You Win! Rock beats Scissors";
                playerScore++; 
            } else { // computer === paper
                roundResult.innerText = "You Lose! Paper beats Rock";
                computerScore++; 
            }
        }
        // scissors > paper 
        else if (playerSelection==="scissors") {
            if (computerSelection==="paper") {
                roundResult.innerText = "You Win! Scissors beats Paper";
                playerScore++; 
            } else { // computer === Rock
                roundResult.innerText = "You Lose! Rock beats Scissors";
                computerScore++; 
            }
        }

    }

    const winner = () => {
        buttons.style.display = 'none';

        const heading = document.createElement("div"); 
        heading.innerText = 'result:'; 
        const results = document.createElement("div"); 
        
        container.appendChild(heading);
        container.appendChild(results);

        // determine player or computer as winner
        if (playerScore>computerScore) {
            results.innerText = 'player wins!'; 

        } else if (playerScore<computerScore) {
            results.innerText = 'you lose. computer wins.'; 

        } else {
            results.innerText = "it's a tie!"; 
        }
    }

    playGame();

}

game();