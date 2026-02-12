function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 100);
    if (computerChoice < 33) {
        return "rock";
    } else if (computerChoice < 66){
        return "paper";
    }
    return "scissors";
}

function playRound(computerChoice, humanChoice) {
    if (humanChoice === computerChoice) {
        console.log(`${computerChoice} ties with ${humanChoice}`);
        result.textContent = `Tie, ${humanChoice}`;
    } else if (humanChoice === 'rock' && computerChoice === 'paper' ||
                humanChoice === 'paper' && computerChoice === 'scissors'||
                humanChoice === 'scissors' && computerChoice === 'rock') {
        result.textContent = `Computer wins, ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    } else {
        result.textContent = `You win, ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    }
}

const humanChoiceButtons = document.querySelectorAll(`button`);
const result = document.querySelector(`.result`);
let humanScore = 0, computerScore = 0;
let scoreText = document.createElement(`p`);
let finalResult = document.createElement(`p`);

humanChoiceButtons.forEach((button) => {
    button.addEventListener(`click`, () => {
        const computerChoice = getComputerChoice();
        const humanChoice = button.id;
        playRound(computerChoice, humanChoice);
        scoreText.innerText = `You: ${humanScore}, Computer: ${computerScore}`;
        result.appendChild(scoreText);
        if (humanScore === 5) {
            finalResult.innerText = `You win`;
            result.appendChild(finalResult);
            humanChoiceButtons.forEach((button) => button.disabled = true);
        } else if (computerScore === 5) {
            finalResult.innerText = `Computer wins`;
            result.appendChild(finalResult);
            humanChoiceButtons.forEach((button) => button.disabled = true);
        }
    });
});