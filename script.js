console.log("hello world");

const Rock1 = document.querySelector('#Rock');
const Paper1 = document.querySelector('#Paper');
const Scissor2 = document.querySelector('#Scissors');

function getComputerChoice() {
    const Action = Math.floor(Math.random() * 3);

    switch(Action) {
        case 0:
            return "Rock";
        case 1:
            return "Scissor";
        case 2:
            return "Paper";
    }
}
console.log(getComputerChoice());

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    console.log("Player choice:", playerChoice);
    console.log("Computer choice:", computerChoice);

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

function getPlayerChoice() {
    Rock1.addEventListener('click', () => {
        playRound("Rock");
    });

    Paper1.addEventListener('click', () => {
        playRound("Paper");
    });

    Scissor2.addEventListener('click', () => {
        playRound("Scissor");
    });
}
getPlayerChoice();

