// get player input
// get computer input
// pass inputs to a fuction to compare input
// create another fuction to loop 5 times over
// pass results of 5 loops to another function to declare winner
// (input === "rock" || input === "paper" || input === "scissors")

const choices = ["rock", "paper", "scissors"];
let score = 0;
let round = 0;

function playerChoice() {
  let input = prompt("Choose rock, paper or scissors:");
  for (let i = 0; i < 5; i++) {
    if (input === "rock" || input === "paper" || input === "scissors") {
      console.log(`Player: ${input}`);
      break;
    } else if (input == null) {
      break;
    } else {
      input = prompt("Incorrect spelling. Try again rock, paper or scissors");
    }
  }

  return input.trim().toLowerCase();
}

function computerChoice() {
  let compInput = choices[Math.floor(Math.random() * choices.length)];
  console.log(`Computer: ${compInput}`);
  return compInput;
}

function compareInputs(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    console.log(`You won! ${playerChoice} beats ${computerChoice}`);
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    console.log(`You won! ${playerChoice} beats ${computerChoice}`);
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    console.log(`You won! ${playerChoice} beats ${computerChoice}`);
  } else {
    console.log(`You lost! ${computerChoice} beats ${playerChoice}`);
  }
}

function game() {
  compareInputs(playerChoice(), computerChoice());
}

game();

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
