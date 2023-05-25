// This is script.js file
var userOption;
var computerOption;

var correctAudio = new Audio("assets/audio/correct_sound.wav");
var wrongAudio = new Audio("assets/audio/wrong_sound.wav");

function showUserSelectedValue(selectedValue) {
    document.getElementById("userValue").innerHTML = "<img src='assets/images/" + selectedValue + ".png' width=100px height=100px>";
    document.getElementById("userValue_mobile").innerHTML = "<img src='assets/images/" + selectedValue + ".png' width=100px height=100px>";
    var options = ["rock", "paper", "scissor"];
    var rand = Math.floor(Math.random() * 3);
    console.log(rand);
    computerValue = options[rand];
    document.getElementById("computerValue").innerHTML = "<img src='assets/images/" + computerValue + ".png' width=100px height=100px>";
    document.getElementById("computerValue_mobile").innerHTML = "<img src='assets/images/" + computerValue + ".png' width=100px height=100px>";

    calculateScore(selectedValue, computerValue);
}

function calculateScore(user, computer) {
    var coumputerScore = getComputerScore();
    var userScore = getUserScore();
    if (user === "rock" && computer === "paper") {
        wrongAudio.play();
        coumputerScore++;
    }
    else if (user === "rock" && computer === "scissor") {
        correctAudio.play();
        userScore++;
    }
    else if (user === "paper" && computer === "scissor") {
        wrongAudio.play();
        coumputerScore++;
    }
    else if (user === "paper" && computer === "rock") {
        correctAudio.play();
        userScore++;
    }
    else if (user === "scissor" && computer === "paper") {
        correctAudio.play();
        userScore++;
    }
    else if (user === "scissor" && computer === "rock") {
        wrongAudio.play();
        coumputerScore++;
    }
    else {

    }
    document.getElementById("cscore").innerText = coumputerScore;
    document.getElementById("yscore").innerText = userScore;
    setTimeout(function () {
        document.getElementById("computerValue").innerHTML = "<img src='assets/images/question.png' width=100px height=100px>";
        document.getElementById("userValue").innerHTML = "<img src='assets/images/question.png' width=100px height=100px>";
        
        document.getElementById("computerValue_mobile").innerHTML = "<img src='assets/images/question.png' width=100px height=100px>";
        document.getElementById("userValue_mobile").innerHTML = "<img src='assets/images/question.png' width=100px height=100px>";

        if (getComputerScore() === 3 || getUserScore() === 3) {

            if (getComputerScore() > getUserScore()) {
                document.getElementById("scoreCard").style.display="block";
                document.getElementById("scoreCard").style.visibility="block";
                document.getElementById("scoreCard").innerText="You Lost ! ☹";
                setTimeout(function () {
                    location.reload();
                },2000);
            }
            else {
                document.getElementById("scoreCard").innerText="You Won ! ✨";
                document.getElementById("scoreCard").style.visibility="block";
                document.getElementById("scoreCard").style.display="block";
                setTimeout(function () {
                    location.reload();
                },2000);
            }
            // location.reload();
        }
       
    }, 2000);

   
}
function getComputerScore() {
    return parseInt(document.getElementById("cscore").innerText);
}
function getUserScore() {
    return parseInt(document.getElementById("yscore").innerText);
}