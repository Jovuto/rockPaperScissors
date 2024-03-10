function getComputerChoice() {
    // create a random number 1 to 3 and store the variable
    let choiceNumber = Math.ceil((Math.random()) * 3);
    console.log(choiceNumber);
    // translate that number into rock, paper, or scissors and store the result as a variable
    let computerChoice;
    if (choiceNumber == 1) {
        computerChoice = "Rock";
    }
    else if (choiceNumber == 2) {
        computerChoice = "Paper";
    }
    else if (choiceNumber == 3) {
        computerChoice = "Scissors";
    }
    else {
        computerChoice = "Something has gone very wrong!";
    }
    console.log(computerChoice)
    // return the output
}