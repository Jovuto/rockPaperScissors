playGame();

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

function playSingleRound (playerSelection) {
    // get the computer's choice and store this as a variable
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    // convert the player choice to lowercase
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    // compare the player choice with the computer choice using a conditional and store the result in a variable
    let Result;
    if (computerChoice == playerSelection) {
        Result = "tie";
    }
    else if ((computerChoice == "rock" && playerSelection == "paper") || 
    (computerChoice == "paper" && playerSelection == "scissors") ||
    (computerChoice == "scissors" && playerSelection == "rock")) {
        Result = "win";
    }
    else if ((computerChoice == "rock" && playerSelection == "scissors") ||
    (computerChoice == "paper" && playerSelection == "rock") ||
    (computerChoice == "scissors" && playerSelection == "paper")) {
        Result = "loss";
    }
    else {
        Result = "error";
        console.error("Rock, paper, scissors only! No spock, or any other weird stuff!! Or something went wrong idk");
    }
    console.log(Result);
    // return the result
    return Result;
}

function playGame() {
    // create a for loop for 5
    for (i = 1, winCounter = 0; i <= 5; i++) {
        // prompt the user for an input and store it as a variable
        let playerSelection = prompt("Rock, paper, or scissors?");
        // use the variable to call the playSingleRound function
        let roundResult = playSingleRound(playerSelection);
        // create a win counter variable that increases by one every time the player wins a round
        if (roundResult == "win") {
            winCounter = ++winCounter;
        }
        console.log(winCounter);
    }
    // using the win counter, decide if the player has won using a conditional
    let Result;
    if (winCounter >= 3){
        Result = "You win! :)"
    }
    else {
        Result = "You lose :("
    }
    console.log(Result);
    // return the result
    return Result;
}