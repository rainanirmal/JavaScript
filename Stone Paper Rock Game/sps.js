let userScore = 0;
let compScore = 0;
const msg = document.querySelector(".msg");

const userScorePara = document.querySelector(".user-score");
const compScorePara = document.querySelector(".comp-score");

const choices = document.querySelectorAll(".choice");

choices.forEach((choicee) => {
    choicee.addEventListener("click" , () => {
        const choiceId = choicee.getAttribute("id");
        playGame(choiceId);
    });
});

const playGame = (choiceId) => {
    console.log(`User choice = ${choiceId}`);
    const compChoice = genCompChoice();
    console.log(`Computer choice = ${compChoice}`);

    if(choiceId === compChoice){
        drawGame();
    }
    else {
        let userWin = true;
        if(choiceId === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(choiceId === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , choiceId , compChoice);
    }
};

const genCompChoice = () => {
    const option = ["rock" , "paper" , "scissor"];
    const randIdx = Math.floor(Math.random() * 3); // to get the numbers in the range of 0-2
    return option[randIdx];
};

const drawGame = () => {
    console.log("Game draw");
    msg.innerText = "Game draw";
    msg.style.backgroundColor = "blueviolet";
};

const showWinner = (userWin , choiceId , compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win");
        msg.innerText = `You win ! Your ${choiceId} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose");
        msg.innerText = `You lose ! ${compChoice} beats your ${choiceId}`;
        msg.style.backgroundColor = "red";
    }
};