let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const getcompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "The game was a draw .Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You lost.${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userchoice) => {
    //generate computer choice
    const compchoice = getcompchoice();
    if (userchoice === compchoice) {
        //draw game
        drawGame();
    }
    else {
        let userwin = true;
        if (userchoice === "rock") {
            //scissors,paper
            userwin = compchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            //rock,scissor
            userwin = compchoice === "scissors" ? false : true;
        } else {
            //rock,paper
            userwin = compchoice === "rock" ? false : true;

        }
        showWinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});