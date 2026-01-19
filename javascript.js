function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 100);
    if (computerChoice < 33) {
        return "rock";
    } else if (computerChoice < 66){
        return "paper";
    }
    return "scissors";
}

function getHumanChoice() {
    let humanChoice = prompt('Enter your choice (Rock / Paper / Scissors): ');
    return humanChoice;
}

let computerScore = 0,
    humanScore = 0;
console.log(computerScore);
console.log(humanScore);

function playRound(computerChoice, humanChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log(`${computerChoice} ties with ${humanChoice}`);
    } else if (humanChoice === 'rock' && computerChoice === 'paper' ||
                humanChoice === 'paper' && computerChoice === 'scissors'||
                humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}`)
        computerScore++;
    } else {
        console.log(`You win, ${humanChoice} beats ${computerChoice}`)
        humanScore++;
    }
}

// log computer choice first
// function playRound(computerChoice) {
//     console.log(computerChoice);
//     let humanChoice = getHumanChoice().toLowerCase();
//     if (humanChoice === computerChoice) {
//         console.log(`${computerChoice} ties with ${humanChoice}`);
//     } else if (humanChoice === 'rock' && computerChoice === 'paper' ||
//                 humanChoice === 'paper' && computerChoice === 'scissors'||
//                 humanChoice === 'scissors' && computerChoice === 'rock') {
//         console.log(`You lose, ${computerChoice} beats ${humanChoice}`)
//         computerScore++;
//     } else {
//         console.log(`You win, ${humanChoice} beats ${computerChoice}`)
//         humanScore++;
//     }
// }

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();
playRound(computerSelection, humanSelection);
// playRound(getComputerChoice());
console.log(computerScore);
console.log(humanScore);