// get player input
// get computer input
// pass inputs to a fuction to compare input
// create another fuction to loop 5 times over
// pass results of 5 loops to another function to declare winner
// (input === "rock" || input === "paper" || input === "scissors")
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

let round = 0;

function playerChoice() {
  
  }

  return input;
}

function computerChoice() {
  let compInput = choices[Math.floor(Math.random() * choices.length + 1)];
  // console.log(`Computer: ${compInput}`);
  return compInput;
}

function compareInputs(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    console.log(`It's a tie!. Score: ${playerScore}:${computerScore}`);
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    playerScore++;
    console.log(
      `You won! ${playerChoice} beats ${computerChoice}. Score: ${playerScore}:${computerScore}`
    );
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    playerScore++;
    console.log(
      `You won! ${playerChoice} beats ${computerChoice}. Score: ${playerScore}:${computerScore}`
    );
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    playerScore++;
    console.log(
      `You won! ${playerChoice} beats ${computerChoice}. Score: ${playerScore}:${computerScore}`
    );
  } else {
    computerScore++;
    console.log(
      `You lost! ${computerChoice} beats ${playerChoice}. Score: ${playerScore}:${computerScore}`
    );
  }
}

// compare wins function: if playerscore > computerscore player wins else computer wins
// if firstround; round = 1
// if player beats computer;  score = 1:0

function checkWinner() {
  if (playerScore === computerScore) {
    console.log("IT'S A DRAW!");
  } else if (playerScore > computerScore) {
    console.log("YOU WON!");
  } else {
    console.log("YOU LOST!");
  }
}

// loops 5 times and prints outputs to console

function game() {
  for (let i = 1; i <= 5; i++) {
    round++;

    console.log(`Round:${round} ~`);
    compareInputs(playerChoice(), computerChoice());
  }
  checkWinner(compareInputs());
}

// if yes then pass game() else exit

function play() {
  let play = confirm("Do you want to play a few rounds?");
  if (play) {
    game();
    playAgain();
  }
}

// if game ends prompt play again?
// if ok? play again else break

// function playAgain() {
//   let playAgain = confirm("Play again?");
//   // can't figure out how to reset rounds and score
//   if (playAgain) {
//     round = 0;
//     playerScore = 0;
//     computerScore = 0;
//     game();
//   }
// }

// play();
// switch ((playerChoice, computerChoice)) {
//   case playerChoice === computerChoice:
//     console.log("It's a tie!");
//     break;

//   case playerChoice === "rock" && computerChoice === "scissors":
//     console.log(`You won! ${playerChoice} beats ${computerChoice}`);
//     break;

//   case playerChoice === "paper" && computerChoice === "rock":
//     console.log(`You won! ${playerChoice} beats ${computerChoice}`);
//     break;

//   case playerChoice === "scissors" && computerChoice === "paper":
//     console.log(`You won! ${playerChoice} beats ${computerChoice}`);
//     break;
// }
