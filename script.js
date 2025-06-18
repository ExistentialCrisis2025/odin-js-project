let getComputerChoice = () =>{
    let choice = Math.random();
    if(choice <= 0.3){
        return "rock";
    } else if(choice <= 0.6){
        return "paper";
    } else{
        return "scissors";
    }
}

let getHumanChoice = function(){
    let choice = String(prompt("Enter your choice: "));
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(){
    let computer = getComputerChoice();
    let human = getHumanChoice();

    computer = computer.toLowerCase();
    human = human.toLowerCase();

    if(computer == "rock" && human == "paper"){
        console.log("Computer Wins");
        computerScore++;
    } else if(computer == "paper" && human == "rock"){
        console.log("Computer Wins");
        computerScore++;
    } else if(computer == "scissors" && human == "paper"){
        console.log("Computer wins");
        computerScore++;
    } else if(human == "rock" && computer == "paper"){
        console.log("You win");
        humanScore++;
    } else if(human == "paper" && computer == "rock"){
        console.log("You win");
        humanScore++;
    } else if(human == "scissors" && computer == "paper"){
        console.log("You win");
        humanScore++;
    } else{
        console.log("Its a tie");
    }
}

function playGame(){

    for(let i = 0;i<5;i++){
        playRound();
    }

    if(humanScore>computerScore){
        console.log("You win the game");
    } else if(humanScore<computerScore){ 
        console.log("Computer wins the game");
    } else{
        console.log("Tied game");
    }
}

playGame();