function getComputerChoice(){
    let choice = ['rock', 'paper', 'scissor'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function getHumanChoice(){
    let humanC = prompt('Enter Your Choice: rock, paper, scissor');
    return humanC;
}

function computerWins(){
    // console.log("Computer Wins");
    cscore.textContent++;
}
function humanWins(){
    // console.log("Human Wins");
    hscore.textContent++;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice){
        result.textContent = "Game Tie: No Winner";
        computerWins();
        humanWins(); 
    }
    else if(humanChoice === 'rock'){
        if (computerChoice === 'paper'){
            computerWins();
            result.textContent = "Paper Beats Rock";
        }else{
            humanWins();
            result.textContent = "Rock Beats Scissor";
        }
    }
    else if(humanChoice === 'paper'){
        if (computerChoice === 'rock'){
            humanWins();
            result.textContent = "Paper Beats Rock";
        }else{
            computerWins();
            result.textContent = "Scissor Beats Paper";
        }
    }
    else{
        if (computerChoice === 'rock'){
            computerWins();
            result.textContent = "Rock Beats Scissor";
        }else{
            humanWins();
            result.textContent = "Scissor Beats Paper";
        }
    }
}

function playGame(hmc){
    // let hmc = getHumanChoice();
    let cmc = getComputerChoice();
    playRound(hmc, cmc);
    rounds++;
    if(hscore.textContent == 5 || cscore.textContent == 5){
        if (hscore.textContent == cscore.textContent){
            result.textContent = "Game Draw";
        }else if(hscore.textContent > cscore.textContent){
            result.textContent = "Human Wins";
        }else{
            result.textContent = "Computer Wins";
        }
        rock.disabled = true;
        paper.disabled = true;
        scissor.disabled = true;
    }
}

// let humanScore = 0;
// let computerScore = 0;

// playGame();

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');

// let buttonArray = document.querySelectorAll('button');
const container = document.querySelector('#container');


const buttons = [rock, paper, scissor];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playGame(button.textContent);
  });
});

const result = document.querySelector("#result");
const hscore = document.querySelector("#hscore");
const cscore = document.querySelector("#cscore");

hscore.textContent = 0;
cscore.textContent = 0;
var rounds = 0;