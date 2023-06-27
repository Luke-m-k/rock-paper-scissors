function getComputerChoice(){
    let randomNo = Math.round(Math.random() * 100);
    let choice;

    if((randomNo % 3) === 1){
        choice = "Rock";
    }
    else if((randomNo % 3) === 2){
        choice = "Paper";
    }
    else {
        choice = "Scissors";
    }

    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return("Draw");
    }
    else if((playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection ==="Scissors" && computerSelection === "Rock")) {
        return(`You Win! ${playerSelection} beats ${computerSelection}.`);
    }
    else {
        return(`You Lose! ${playerSelection} is beaten by ${computerSelection}.`)
    }
}

function game(){
    let compScore = 0, playerScore = 0, rounds = 0, score, playerSelection, computerSelection;

    while (rounds < 5){
        playerSelection = window.prompt("Choose either Rock, Papper or Scissors.");
        if (playerSelection === null){
            break;
        }
        playerSelection = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();

        if ((playerSelection != "Rock") && (playerSelection != "Papper") && (playerSelection != "Scissors")){
            console.log("Please Enter a valid value");
            continue;
        }

        computerSelection = getComputerChoice();
        score = playRound(playerSelection, computerSelection);
        if (score === `You Win! ${playerSelection} beats ${computerSelection}.`){
            playerScore += 1;
        }
        else if (score === `You Lose! ${playerSelection} is beaten by ${computerSelection}.`){
            compScore += 1;
        }

        console.log(score);
        rounds += 1;
    }

    if (playerScore > compScore){
        console.log("You WIN the game.");
    }
    else if (compScore > playerScore){
        console.log("You LOSE the game.");
    }
    else {
        console.log("You DRAW the game.")
    }

    console.log(`Your Score: ${playerScore}\nComputer Score: ${compScore}`);
}

game();