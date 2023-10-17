const getComputerChoice = () => ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];

const playRound = (playerSelection, computerSelection) => {
	playerSelection = playerSelection.toLowerCase();
	if (playerSelection === computerSelection) return 'Draw!';
	if (playerSelection === 'rock' && computerSelection === 'paper') {
		return `You Lose! ${
			computerSelection[0].toUpperCase() + computerSelection.slice(1)
		} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}`;
	}
	if (playerSelection === 'paper' && computerSelection === 'scissors') {
		return `You Lose! ${
			computerSelection[0].toUpperCase() + computerSelection.slice(1)
		} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}`;
	}
	if (playerSelection === 'scissors' && computerSelection === 'rock') {
		return `You Lose! ${
			computerSelection[0].toUpperCase() + computerSelection.slice(1)
		} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}`;
	}
	return `You Win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${
		computerSelection[0].toUpperCase() + computerSelection.slice(1)
	}`;
};

const game = () => {
	let computerScore = 0;
	let playerScore = 0;
	for (let i = 0; i < 5; i++) {
		let playerSelection = prompt("What' your choice?");
		let result = playRound(playerSelection, getComputerChoice());
		console.log(result);
		if (result[4] === 'L') computerScore++;
		else if (result[4] === 'W') playerScore++;
	}
	return computerScore > playerScore ? 'Computer Wins!' : 'Player Wins!';
};

console.log(game());
