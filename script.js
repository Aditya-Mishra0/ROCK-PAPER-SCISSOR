console.log("hello world");

const Rock1 = document.querySelector('#Rock');
const Paper1 = document.querySelector('#Paper');
const Scissor2 = document.querySelector('#Scissor');

function getComputerChoice()
{
    const Action = Math.floor(Math.random()*3);

    switch(Action){
        case 0:
        console.log("Rock");
        break;
        case 1:
            console.log("Scissor");
            break;
            case 2:
                console.log("Paper");
                break;

    }
    return Action;
}
console.log(getComputerChoice(3));

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

function Game(){
  if  (getComputerChoice===getplayerchoice){
    console.log("It's a tie");
  }
  else if  (
    (getComputerChoice ==="Rock" && getplayerchoice ==="Paper")
    (getComputerChoice === "Paper" && getplayerchoice === "Scissor")
    (getComputerChoice === "Scissor" && getplayerchoice === "Rock")
  ){
    console.log("Player wins");
  }
else
{
console.log("Computer wins");
}
}
