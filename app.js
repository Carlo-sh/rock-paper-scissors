const items = document.querySelectorAll('.btns');

const player = document.getElementById('player');
const computer = document.getElementById('computer');
const playerChoice = document.getElementById('p-choice');
const computerChoice = document.getElementById('c-choice');

const result = document.getElementById('results');
const roundRes = document.createElement('h2');
const gameRes = document.createElement('h1');
const scores = document.getElementById('scores');

let computerScore = 0;
let playerScore = 0;

items.forEach(item =>
	item.addEventListener('click', () => {
		if (scores.lastChild.textContent[0] === 'G') {
			scores.removeChild(gameRes);
		}
		result.appendChild(roundRes);
		roundRes.textContent = `${playRound(
			(playerSelection = item.textContent),
			getComputerChoice()
		)}`;

		if (roundRes.textContent[4] === 'W') playerScore++;
		if (roundRes.textContent[4] === 'L') computerScore++;
		player.textContent = `Player: ${playerScore}`;
		computer.textContent = `Computer: ${computerScore}`;

		if (playerScore === 5 || computerScore === 5) {
			scores.appendChild(gameRes);
			gameRes.textContent = `Game Over! ${playerScore === 5 ? 'Player' : 'Computer'} Wins!`;
			playerScore = 0;
			computerScore = 0;
		}
	})
);

const getComputerChoice = () => ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)];

const playRound = (playerSelection, computerSelection) => {
	playerChoice.textContent = `Player choice: ${playerSelection}`;
	computerChoice.textContent = `Computer choice: ${computerSelection}`;
	if (playerSelection === computerSelection) return 'Draw!';
	if (playerSelection === 'Rock' && computerSelection === 'Paper') {
		return `You Lose! ${
			computerSelection[0].toUpperCase() + computerSelection.slice(1)
		} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}`;
	}
	if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
		return `You Lose! ${
			computerSelection[0].toUpperCase() + computerSelection.slice(1)
		} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}`;
	}
	if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
		return `You Lose! ${
			computerSelection[0].toUpperCase() + computerSelection.slice(1)
		} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}`;
	}
	return `You Win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${
		computerSelection[0].toUpperCase() + computerSelection.slice(1)
	}`;
};
