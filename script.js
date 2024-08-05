console.log("hello world");

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
function getplayerchoice(){

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
