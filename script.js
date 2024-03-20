//playGame();

const ROCK_BUTTON = document.querySelector(".rockButton");
const PAPER_BUTTON = document.querySelector(".paperButton");
const SCISSORS_BUTTON = document.querySelector(".scissorsButton");
const RESULT_AREA = document.querySelector(".results");

const SCORE = document.querySelector(".score > p");

let playerWinCounter = 0;
let cpuWinCounter = 0;

SCORE.textContent = "Player: " + playerWinCounter + " CPU: " + cpuWinCounter;

ROCK_BUTTON.addEventListener("click", () => playSingleRound("rock"));
PAPER_BUTTON.addEventListener("click", () => playSingleRound("paper"));
SCISSORS_BUTTON.addEventListener("click", () => playSingleRound("scissors"));

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

    // convert the player choice to lowercase
    playerSelection = playerSelection.toLowerCase();
    console.log("The player selected: " + playerSelection);
    const PLAYER_OUTPUT = document.createElement("p");
    RESULT_AREA.appendChild(PLAYER_OUTPUT);
    PLAYER_OUTPUT.textContent = "The player selected: " + playerSelection;

    // get the computer's choice and store this as a variable
    let computerChoice = getComputerChoice();
    console.log("The CPU selected: " + computerChoice);
    const CPU_OUTPUT = document.createElement("p");
    RESULT_AREA.appendChild(CPU_OUTPUT);
    CPU_OUTPUT.textContent = "The CPU selected: " + computerChoice;

    // compare the player choice with the computer choice using a conditional and store the result in a variable
    let Result;
    if (computerChoice == playerSelection) {
        Result = "tie";
    }
    else if ((computerChoice == "rock" && playerSelection == "paper") || 
    (computerChoice == "paper" && playerSelection == "scissors") ||
    (computerChoice == "scissors" && playerSelection == "rock")) {
        Result = "win";
        playerWinCounter++;
        SCORE.textContent = "Player: " + playerWinCounter + " CPU: " + cpuWinCounter;
    }
    else if ((computerChoice == "rock" && playerSelection == "scissors") ||
    (computerChoice == "paper" && playerSelection == "rock") ||
    (computerChoice == "scissors" && playerSelection == "paper")) {
        Result = "loss";
        cpuWinCounter++;
        SCORE.textContent = "Player: " + playerWinCounter + " CPU: " + cpuWinCounter;
    }
    else {
        Result = "error";
        console.error("Rock, paper, scissors only! No spock, or any other weird stuff!! Or something went wrong idk");
    }
    console.log(Result);
    const RESULT = document.createElement("p");
    RESULT_AREA.appendChild(RESULT);
    RESULT.textContent = Result;

    if (playerWinCounter >= 5) {
        SCORE.textContent = "Player: " + playerWinCounter + " CPU: " + cpuWinCounter + " Player wins!";
    }
    else if (cpuWinCounter >= 5) {
        SCORE.textContent = "Player: " + playerWinCounter + " CPU: " + cpuWinCounter + " CPU wins :(";
    }
    // return the result
    return Result;
}

/* function playGame() {
    // create a for loop for 5
    for (i = 1, winCounter = 0, loseCounter = 0; i <= 5; i++) {
        console.group("Round: " + i);
        // prompt the user for an input and store it as a variable
        let playerSelection = prompt("Rock, paper, or scissors?");
        // use the variable to call the playSingleRound function
        let roundResult = playSingleRound(playerSelection);
        // create a win and tie counter variable that increases by one every time the player wins or ties a round
        if (roundResult == "win") {
            winCounter = ++winCounter;
        }
        else if (roundResult == "loss") {
            loseCounter = ++loseCounter;
        }
        console.log("Rounds won: " + winCounter);
        console.log("Rounds lost: " + loseCounter);
        console.groupEnd();
    }
    // using the win counter, decide if the player has won using a conditional
    let Result;
    if (winCounter >= 3){
        Result = "You win! :)"
    }
    else if (winCounter == loseCounter) {
        Result = "DRAW!!";
    }
    else {
        Result = "You lose :("
    }
    console.log(Result);
    // return the result
    return Result;
} */