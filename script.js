console.log("hello world");

// Get DOM elements for Rock, Paper, and Scissors
const Rock1 = document.querySelector('#Rock');
const Paper1 = document.querySelector('#Paper');
const Scissor2 = document.querySelector('#Scissor');

// Function to get computer's choice
function getComputerChoice() {
    const Action = Math.floor(Math.random() * 3);

    switch(Action) {
        case 0:
            console.log("Rock");
            return "Rock";
        case 1:
            console.log("Scissor");
            return "Scissor";
        case 2:
            console.log("Paper");
            return "Paper";
    }
}

console.log(getComputerChoice());

// Function to get player's choice
function getPlayerChoice() {
    Rock1.addEventListener('click', () => {
        playGame("Rock");
    });

    Paper1.addEventListener('click', () => {
        playGame("Paper");
    });

    Scissor2.addEventListener('click', () => {
        playGame("Scissor");
    });
}

// Initialize player choice event listeners
getPlayerChoice();

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    console.log(`Player chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (playerChoice === computerChoice) {
        console.log("It's a tie");
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissor") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissor" && computerChoice === "Paper")
    ) {
        console.log("Player wins");
    } else {
        console.log("Computer wins");
    }
}

