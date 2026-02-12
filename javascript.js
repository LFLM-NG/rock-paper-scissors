function getComputerChoice() {
    // let computerChoice = Math.floor(Math.random() * 100);
    // if (computerChoice < 33) {
    //     return "rock";
    // } else if (computerChoice < 66){
    //     return "paper";
    // }
    return "scissors";
}

function playGame() {
    let computerScore = 0,
    humanScore = 0;

    function playRound(computerChoice, humanChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            console.log(`${computerChoice} ties with ${humanChoice}`);
        } else if (humanChoice === 'rock' && computerChoice === 'paper' ||
                    humanChoice === 'paper' && computerChoice === 'scissors'||
                    humanChoice === 'scissors' && computerChoice === 'rock') {
            console.log(`Computer wins, ${computerChoice} beats ${humanChoice}`)
            computerScore++;
        } else {
            console.log(`You win, ${humanChoice} beats ${computerChoice}`)
            humanScore++;
        }
    }

    playRound(getComputerChoice(), getHumanChoice());
    console.log(`You: ${humanScore}, Computer: ${computerScore}`);

    let result = ``;
    if (humanScore === computerScore) {
        result = `Tie ${humanScore} to ${computerScore}`;
    } else {
        result = (humanScore > computerScore) ?
         `You win ${humanScore} to ${computerScore}` :
         `Computer wins ${computerScore} to ${humanScore}`;
    }
    console.log(result);
}

function playRound(computerChoice, humanChoice) {
    if (humanChoice === computerChoice) {
        console.log(`${computerChoice} ties with ${humanChoice}`);
        result.textContent = `Tie, ${humanChoice}`;
    } else if (humanChoice === 'rock' && computerChoice === 'paper' ||
                humanChoice === 'paper' && computerChoice === 'scissors'||
                humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log(`Computer wins, ${computerChoice} beats ${humanChoice}`);
        result.textContent = `Computer wins, ${computerChoice} beats ${humanChoice}`;
        // computerScore++;
    } else {
        console.log(`You win, ${humanChoice} beats ${computerChoice}`)
        result.textContent = `You win, ${humanChoice} beats ${computerChoice}`;
        // humanScore++;
    }
}

const humanChoiceButtons = document.querySelectorAll(`button`);
const result = document.querySelector(`.result`);

humanChoiceButtons.forEach((button) => {
    // let humanScore = 0, computerScore = 0;
    button.addEventListener(`click`, () => {
        const computerChoice = getComputerChoice();
        const humanChoice = button.id;
        playRound(computerChoice, humanChoice);
    });
});