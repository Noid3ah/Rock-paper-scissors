// get player input
// get computer input
// pass inputs to a fuction to compare input
// create another fuction to loop 5 times over
// pass results of 5 loops to another function to declare winner
// (input === "rock" || input === "paper" || input === "scissors")

const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

let round = 0;

function playerChoice() {
  let input = prompt("Choose rock, paper or scissors:");
  for (let i = 0; i < 5; i++) {
    if (input === "rock" || input === "paper" || input === "scissors") {
      // console.log(`Player: ${input}`);
      continue;
    } else if (input === null) {
      break;
    } else {
      input = prompt("Incorrect spelling. Try again rock, paper or scissors");
    }
  }

  return input.trim().toLowerCase();
}

function computerChoice() {
  let compInput = choices[Math.floor(Math.random() * choices.length)];
  // console.log(`Computer: ${compInput}`);
  return compInput;
}

function compareInputs(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    console.log(` It's a tie!. Score: ${playerScore}:${computerScore}`);
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

function game() {
  for (let i = 0; i < 5; i++) {
    round++;
    console.log(`Round:${round} ~`);
    compareInputs(playerChoice(), computerChoice());
    // if (round === 5) {
    //   round = 0;
    //   playerScore = 0;
    //   computerScore = 0;
    //   playerScore++;

    //   computerScore++;
    // }
  }
  checkWinner(compareInputs());
}

// if game ends prompt play again?
// if ok? play again else break

function playAgain() {
  let play = confirm("Play again?");
  if (play) {
    game();
  }
}

game();
playAgain();
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
