function getComputerChoice(){
    let choice = ['rock', 'paper', 'scissor'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function getHumanChoice(){
    let humanC = prompt('Enter Your Choice: rock, paper, scissor');
    return humanC;
}

function computerWins(){
    console.log("Computer Wins");
    computerScore++;
}
function humanWins(){
    console.log("Human Wins");
    humanScore++;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice){
        console.log("Game Tie: No Winner");
    }
    else if(humanChoice === 'rock'){
        if (computerChoice === 'paper'){
            computerWins();
            console.log("Paper Beats Rock");
        }else{
            humanWins();
            console.log("Rock Beats Scissor");
        }
    }
    else if(humanChoice === 'paper'){
        if (computerChoice === 'rock'){
            humanWins();
            console.log("Paper Beats Rock");
        }else{
            computerWins();
            console.log("Scissor Beats Paper");
        }
    }
    else{
        if (computerChoice === 'rock'){
            computerWins();
            console.log("Rock Beats Scissor");
        }else{
            humanWins();
            console.log("Scissor Beats Paper");
        }
    }
}

function playGame(){
    let hmc = getHumanChoice();
    let cmc = getComputerChoice();
    playRound(hmc, cmc);
    console.log("\n");
    console.log("Final Scores: ");
    console.log("Human: " + humanScore);
    console.log("Computer: "+ computerScore);
    if (humanScore == computerScore){
        console.log("Game Draw");
    }else if(humanScore > computerScore){
        console.log("Human Wins");
    }else{
        console.log("Computer Wins");
    }
}

let humanScore = 0;
let computerScore = 0;

// playGame();

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');

// let buttonArray = document.querySelectorAll('button');
const container = document.querySelector('#container');


const buttons = [rock, paper, scissor];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.textContent, getComputerChoice());
  });
});