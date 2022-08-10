const rock_div = document.querySelector("#rock");
const paper_div = document.querySelector("#paper");
const scissors_div = document.querySelector("#scissors");
const playerScore_span = document.querySelector(".player__score");
const computerScore_span = document.querySelector(".computer__score");
const user_span = document.querySelector("#userr");
const comp_span = document.querySelector("#compp");
const outcome_div = document.querySelector(".outcome");
const resetGame_button = document.querySelector(".reset__btn");
const help_button = document.querySelector(".help__btn");
const openModal_dialog = document.querySelector("#modal");
const closeModal_button = document.querySelector(".close__modal");

const choices = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

function win(user, comp) {
  const borderColor = document.getElementById(user);
  playerScore++;
  playerScore_span.innerText = playerScore;
  user_span.innerText = `${user}`;
  comp_span.innerText = `${comp}`;
  user_span.style.color = "black";
  comp_span.style.color = "black";
  outcome_div.innerText = "YOU WON!";
  outcome_div.setAttribute("style", "color:limegreen; font-size:1.5rem; ");
  borderColor.classList.add("user_win");
  setTimeout(() => borderColor.classList.remove("user_win"), 200);
}

function lose(user, comp) {
  const borderColor = document.getElementById(user);
  computerScore++;
  computerScore_span.innerText = computerScore;
  user_span.innerText = `${user}`;
  comp_span.innerText = `${comp}`;
  user_span.style.color = "black";
  comp_span.style.color = "black";
  outcome_div.innerText = "YOU LOST!";
  outcome_div.setAttribute("style", "color:red; font-size:1.5rem;");
  borderColor.classList.add("user_lose");
  setTimeout(() => borderColor.classList.remove("user_lose"), 200);
}

function draw(user, comp) {
  const borderColor = document.getElementById(user);
  playerScore_span.innerText = playerScore;
  computerScore_span.innerText = computerScore;
  user_span.innerText = `${user}`;
  comp_span.innerText = `${comp}`;
  user_span.style.color = "black";
  comp_span.style.color = "black";
  outcome_div.innerText = "DRAW!";
  outcome_div.setAttribute("style", "color:grey; font-size:1.5rem;");
  borderColor.classList.add("user_draw");
  setTimeout(() => borderColor.classList.remove("user_draw"), 200);
}

function game(userChoice) {
  const computer = computerChoice();
  switch (userChoice + " " + computer) {
    case "rock scissors":
    case "paper rock":
    case "scissors paper":
      win(userChoice, computer);
      break;
    case "rock paper":
    case "paper scissors":
    case "scissors rock":
      lose(userChoice, computer);
      break;
    case "rock rock":
    case "paper paper":
    case "scissors scissors":
      draw(userChoice, computer);
      break;
  }
}

function playerChoice() {
  rock_div.addEventListener("click", () => {
    game("rock");
  });
  paper_div.addEventListener("click", () => {
    game("paper");
  });
  scissors_div.addEventListener("click", () => {
    game("scissors");
  });
}
playerChoice();

function computerChoice() {
  let compInput = choices[Math.floor(Math.random() * choices.length)];
  return compInput;
}

function reset() {
  resetGame_button.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    playerScore_span.innerText = playerScore;
    computerScore_span.innerText = computerScore;
    user_span.innerText = "";
    comp_span.innerText = "";
    outcome_div.innerText = "";
  });
}
reset();

function helpDialog() {
  help_button.addEventListener("click", () => {
    openModal_dialog.showModal();
  });
  closeModal_button.addEventListener("click", () => {
    openModal_dialog.close();
  });
}
helpDialog();
