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
        humanScore++;
        computerScore++;
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

let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

