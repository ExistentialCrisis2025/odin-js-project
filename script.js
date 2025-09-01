var rock = document.createElement('button')
rock.classList.add('rock');

var rockText = document.createTextNode('Rock');
rock.appendChild(rockText);

var paper = document.createElement('button');
paper.classList.add('paper');

var paperText = document.createTextNode('Paper');
paper.appendChild(paperText);

var scissors = document.createElement('button');
paper.classList.add('scissors');

var scissorsText = document.createTextNode('Scissors');
scissors.appendChild(scissorsText);

var container = document.querySelector('.container');
container.style.display = 'flex';
container.style.flexDirection = 'row';
container.style.gap = '15px';
container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);

rock.addEventListener('click',playRound);
paper.addEventListener('click',playRound);
scissors.addEventListener('click',playRound);

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

function getHumanChoice(e){
    console.log(e.target.value);
    return e.target.value;
}

let humanScore = 0;
let computerScore = 0;

function playRound(e){
    let computer = getComputerChoice();
    let human = e.target.textContent;
    console.log(human);

    computer = computer.toLowerCase();
    human = human.toLowerCase();

    if(computer == "rock" && human == "paper"){
        console.log("Computer Wins");
        computerScore++;
        computerScoreText.textContent = 'Computer Score: ' + computerScore +'\n';
    } else if(computer == "paper" && human == "rock"){
        console.log("Computer Wins");
        computerScore++;
        computerScoreText.textContent = 'Computer Score: ' + computerScore +'\n';
    } else if(computer == "scissors" && human == "paper"){
        console.log("Computer wins");
        computerScore++;
        computerScoreText.textContent = 'Computer Score: ' + computerScore +'\n';
    } else if(human == "rock" && computer == "paper"){
        console.log("You win");
        humanScore++;
        humanScoreText.textContent = 'Human Score: ' + humanScore + '\n';
    } else if(human == "paper" && computer == "rock"){
        console.log("You win");
        humanScore++;
        humanScoreText.textContent = 'Human Score: ' + humanScore + '\n';
    } else if(human == "scissors" && computer == "paper"){
        console.log("You win");
        humanScore++;
        humanScoreText.textContent = 'Human Score: ' + humanScore + '\n';
    } else{
        console.log("Its a tie");
    }

    checkWinner();
}

function checkWinner(){
    if(humanScore == 5){
        var text = document.createTextNode('You won');
        container.appendChild(text);
        return;
    } else if(computerScore == 5){
        var text = document.createTextNode('Computer Won');
        container.appendChild(text);
        return;
    }
}

function playGame(){

    

    if(humanScore>computerScore){
        console.log("You win the game");
    } else if(humanScore<computerScore){ 
        console.log("Computer wins the game");
    } else{
        console.log("Tied game");
    }
}

var scoreDiv = document.createElement('div');
scoreDiv.classList.add('scores');

var humanScoreText = document.createTextNode('Your score: ' + humanScore +'\n');
var computerScoreText = document.createTextNode('Computer score: ' + computerScore + '\n');

scoreDiv.appendChild(humanScoreText);
scoreDiv.appendChild(computerScoreText);

container.appendChild(scoreDiv);



playGame();