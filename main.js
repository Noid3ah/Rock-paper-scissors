// rock paper scissors vs computer
// create function for computer input called computerPlay
// create function for player input called playerPlay
// function computerPlay will randomly choose between 3 strings on every call (rock paper sciccors)
// return computer choice
//function playerPlay will prompt user for their choice
// return player choice

function computerPlay() {
  let words = ["Rock", "Paper", "Sciccors"];
  let computerChoice = words[Math.floor(Math.random() * words.length)];
  return computerChoice.toLowerCase();
}

console.log(computerPlay());

const playerPlay = () => {
  let playerChoice = prompt("Rock.. paper.. sciccors.. SHOOT!:");

  return playerChoice.toLowerCase();
};

console.log(playerPlay().toLowerCase());
