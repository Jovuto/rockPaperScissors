function getComputerChoice() {
    // create a random number 1 to 3 and store the variable
    let choiceNumber = Math.ceil((Math.random()) * 3);
    // translate that number into rock, paper, or scissors and store the result as a variable
    let computerChoice;
    if (choiceNumber == 1) {
        computerChoice = "rock";
    }
    else if (choiceNumber == 2) {
        computerChoice = "paper";
    }
    else if (choiceNumber == 3) {
        computerChoice = "scissors";
    }
    else {
        computerChoice = "Something has gone very wrong!";
        console.error(computerChoice);
    }
    // return the output
    return computerChoice;
}

function playRockPaperScissors (playerSelection) {
    // get the computer's choice and store this as a variable
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    // convert the player choice to lowercase
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    // compare the player choice with the computer choice using a conditional and store the result in a variable
    // return the result
}