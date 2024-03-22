//playGame();

const ROCK_BUTTON = document.querySelector(".rockButton");
const PAPER_BUTTON = document.querySelector(".paperButton");
const SCISSORS_BUTTON = document.querySelector(".scissorsButton");
const RESULT_AREA = document.querySelector(".results");
const PLAYER_OUTPUT = document.querySelector(".playerOutput");
const CPU_OUTPUT = document.querySelector(".cpuOutput");
const WIN_OR_LOSE = document.querySelector(".winOrLose");
const BUTTON_AREA = document.querySelector(".buttons");
const RESTART_BUTTON = document.createElement("button");

let isGameOver = false;

const SCORE = document.querySelector(".score > p");

let playerWinCounter = 0;
let cpuWinCounter = 0;

SCORE.textContent = "You: " + playerWinCounter + " Fifi: " + cpuWinCounter;

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

    if (isGameOver == false){

    // convert the player choice to lowercase
    playerSelection = playerSelection.toLowerCase();
    console.log("The player selected: " + playerSelection);
    PLAYER_OUTPUT.textContent = "You selected: " + playerSelection;

    // get the computer's choice and store this as a variable
    let computerChoice = getComputerChoice();
    console.log("The CPU selected: " + computerChoice);
    CPU_OUTPUT.textContent = "Fifi selected: " + computerChoice;

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
        SCORE.textContent = "You: " + playerWinCounter + " Fifi: " + cpuWinCounter;
    }
    else if ((computerChoice == "rock" && playerSelection == "scissors") ||
    (computerChoice == "paper" && playerSelection == "rock") ||
    (computerChoice == "scissors" && playerSelection == "paper")) {
        Result = "loss";
        cpuWinCounter++;
        SCORE.textContent = "You: " + playerWinCounter + " Fifi: " + cpuWinCounter;
    }
    else {
        Result = "error";
        console.error("Rock, paper, scissors only! No spock, or any other weird stuff!! Or something went wrong idk");
    }
    console.log(Result);
    switch (Result){
        case "tie":
            WIN_OR_LOSE.textContent = "We tied! We must be on the same wavelength";
            break;
        case "win":
            WIN_OR_LOSE.textContent = "You won! It's not easy making these shapes with paws :(";
            break;
        case "loss":
            WIN_OR_LOSE.textContent = "You lost and I won! WOOF";
    }
}

    if (isGameOver == false){

        if (playerWinCounter >= 5) {
            SCORE.textContent = "You: " + playerWinCounter + " Fifi: " + cpuWinCounter + " You win!";
            isGameOver = true;
            BUTTON_AREA.appendChild(RESTART_BUTTON);
            RESTART_BUTTON.textContent = "Restart";
            RESTART_BUTTON.addEventListener("click", () => restartGame());
        }
        else if (cpuWinCounter >= 5) {
            SCORE.textContent = "You: " + playerWinCounter + " Fifi: " + cpuWinCounter + " Fifi wins!";
            isGameOver = true;
            BUTTON_AREA.appendChild(RESTART_BUTTON);
            RESTART_BUTTON.textContent = "Restart";
            RESTART_BUTTON.addEventListener("click", () => restartGame());
        }
    }
}

function restartGame(){
    playerWinCounter = 0;
    cpuWinCounter = 0;
    SCORE.textContent = "You: " + playerWinCounter + " Fifi: " + cpuWinCounter;
    isGameOver = false;
    PLAYER_OUTPUT.textContent = "";
    CPU_OUTPUT.textContent = "";
    WIN_OR_LOSE.textContent = "";
    BUTTON_AREA.removeChild(RESTART_BUTTON);
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