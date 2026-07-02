let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {

        const userChoice = choice.id;
        const compChoice = computerChoice();

        console.log("userChoice", userChoice);
        console.log("compChoice", compChoice);

        playGame(userChoice, compChoice);
    });
});

let computerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
};

function playGame(userChoice, compChoice) {
    if (userChoice === compChoice) {
        gameDraw();
    }

    else if (
        (userChoice === "rock" && compChoice === "scissor") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissor" && compChoice === "paper")
    ) {
        userWin(userChoice, compChoice);
    }

    else {
        compWin(userChoice, compChoice);
    }
}

function gameDraw() {
    msg.innerText = "It's a Draw!🤝";
    msg.style.color = "blue";
    msg.style.backgroundColor = "white";
    msg.style.fontSize = "2rem";
}

function userWin(userChoice, compChoice) {
    msg.innerText = `You win!🎉 ${userChoice} beats ${compChoice}`;
    msg.style.color = "green";
    msg.style.backgroundColor = "white";
    msg.style.fontSize = "2rem";

    userScore++;
    userScorePara.innerText = userScore;
}

function compWin(userChoice, compChoice) {
    msg.innerText = `You lose!😫 ${compChoice} beats ${userChoice}`;
    msg.style.color = "red";
    msg.style.backgroundColor = "white";
    msg.style.fontSize = "2rem";

    compScore++;
    compScorePara.innerText = compScore;
}

let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;

    userScorePara.innerText = "0";
    compScorePara.innerText = "0";

    msg.innerText = "Game Restarted🔁";
    msg.style.color = "blue";
    msg.style.backgroundColor = "white";
    msg.style.fontSize = "2rem";

    setTimeout(() => {
        msg.innerText = "Select Rock, Paper, or Scissors";
        msg.style.color = "white";
        msg.style.backgroundColor = "black";
        msg.style.fontSize = "1rem";
    }, 1000);
});
