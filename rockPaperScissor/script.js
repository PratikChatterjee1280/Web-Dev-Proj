
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function play(playerChoice) {
    let computerChoice = getComputerChoice();
    let result = getResult(playerChoice, computerChoice);
    
    let resultEl = document.getElementById("result");
    resultEl.innerHTML = result;
    
    // Reset classes to restart animation and styling
    resultEl.className = "";
    // Trigger reflow to restart CSS animation
    void resultEl.offsetWidth;
    // Add base pop animation class
    resultEl.classList.add("pop");

    if (result === "Player Wins") {
        playerScore++;
        resultEl.classList.add("win");
    }
    else if (result === "Computer Wins") {
        CompScore++;
        resultEl.classList.add("lose");
    } else {
        resultEl.classList.add("draw");
    }

    document.getElementById("computer-choice").innerHTML = "Computer chose: " + computerChoice;
    document.getElementById("score").innerHTML = "Player: " + playerScore + " | Computer: " + CompScore;
}



function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Draw";
    }
    else if (playerChoice === "Rock" && computerChoice === "Scissor") {
        return "Player Wins";
    }
    else if (playerChoice === "Paper" && computerChoice === "Rock") {
        return "Player Wins";
    }
    else if (playerChoice === "Scissor" && computerChoice === "Paper") {
        return "Player Wins";
    }
    else {
        return "Computer Wins";
    }
}

function resetScore() {
    playerScore = 0;
    CompScore = 0;
    document.getElementById("score").innerHTML = "Player: " + playerScore + " | Computer: " + CompScore;
    let resultEl = document.getElementById("result");
    resultEl.innerHTML = "Make your choice!";
    resultEl.className = ""; // clear win/lose/draw/pop
    document.getElementById("computer-choice").innerHTML = "Computer chose: ?";
}


let playerScore = 0;
let CompScore = 0;

