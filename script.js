console.log("hello world");

const Rock1 = document.querySelector('#Rock');
const Paper1 = document.querySelector('#Paper');
const Scissor2 = document.querySelector('#Scissors');
const resultDiv = document.querySelector('#RESULT');
const humanScoreSpan = document.querySelector('#humanScore');
const computerScoreSpan = document.querySelector('#computerScore');

let humanScore = 0;
let computerScore = 0;

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

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    console.log("Player choice:", playerChoice);
    console.log("Computer choice:", computerChoice);

    let resultMessage = '';

    if (playerChoice === computerChoice) {
        resultMessage = "It's a tie!";
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissor") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissor" && computerChoice === "Paper")
    ) {
        resultMessage = "You win!";
        humanScore++;
    } else {
        resultMessage = "Computer wins!";
        computerScore++;
    }

  
    humanScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;

    resultDiv.textContent = `Result: ${resultMessage}  (You chose ${playerChoice}, Computer chose ${computerChoice})`;
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

