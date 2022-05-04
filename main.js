// rock paper scissors vs computer
// create function for computer input called computerPlay
// create function for player input called playerPlay
// function computerPlay will randomly choose between 3 strings on every call (rock paper sciccors)
// return computer choice
//function playerPlay will prompt user for their choice
// return player choice

// create a function that takes input from user
// create a function that takes input from computer
// create a function that'll compare both inputs

function computerPlay() {
  let words = ["Rock", "Paper", "Sciccors"];
  let computerChoice = words[Math.floor(Math.random() * words.length)];
  return computerChoice.toLowerCase();
}
// console.log(computerPlay());

const playerPlay = () => {
  let playerChoice = prompt("Rock.. paper.. scissors.. SHOOT!:");

  return playerChoice.toLowerCase();
};
// console.log(playerPlay().toLowerCase());

const playRound = (x, y) => {
  let playerSelection = playerPlay();
  let computerSelection = computerPlay();
  let rounds = 5;

  for (let i = 0; i < rounds; i++) {
    if (playerSelection === computerSelection) {
      console.log(
        `Player chose ${playerSelection}, computer chose ${computerSelection} Tie!`
      );
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) {
      console.log(
        `Player chose ${playerSelection}, computer chose ${computerSelection} Player wins!`
      );
    } else if (
      (playerSelection === "scissors" && computerSelection === "rock") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "rock" && computerSelection === "paper")
    ) {
      console.log(
        `Player chose ${playerSelection}, computer chose ${computerSelection} Computer wins!`
      );
    }
  }

  return rounds;
};

console.log(playRound());
