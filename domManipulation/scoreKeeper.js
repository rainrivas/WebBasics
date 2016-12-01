// wining players points go green once they win
// user can choose a "play until" number using a drop-down/number picker
// default play-to is 5
// there are button for player one, player two, reset

var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1ScoreDisplay = document.querySelector("#p1Score");
var p2ScoreDisplay = document.querySelector("#p2Score");
var p1Score = 0,
    p2Score = 0; // set both player scores to 0;
var maxScore = 5;
var winInput = document.querySelector("#winning");
var maxScoreDisplay = document.querySelector("p span");
var resetButton = document.querySelector("#reset");
var gameOver = false;

function gameReset(){
	console.log("Game Reset");
    p1Score = p2Score = 0;
    gameOver = false;
    p1ScoreDisplay.textContent = p1Score;
    p2ScoreDisplay.textContent = p2Score;
    p1ScoreDisplay.classList.remove("winner");
    p2ScoreDisplay.classList.remove("winner");
}

winInput.addEventListener("change", function() {
    maxScore = Number(winInput.value);
    maxScoreDisplay.textContent = maxScore;
    gameReset();
});

p1Button.addEventListener("click", function() {
    if (!gameOver) {
        p1Score += 1;
        p1ScoreDisplay.textContent = p1Score;
        console.log("Player One Scores! Score: ", p1Score);

        if (p1Score === maxScore) {
            p1ScoreDisplay.classList.toggle("winner");
            alert("Game over. Player 1 has won!!\nPress reset to start again!");
            gameOver = true
        }
    }
});

p2Button.addEventListener("click", function() {
    if (!gameOver) {
        p2Score += 1;
        p2ScoreDisplay.textContent = p2Score;
        console.log("Player Two Scores! Score: ", p2Score);


        if (p2Score === maxScore) {
            p2ScoreDisplay.classList.toggle("winner");
            alert("Game over. Player 2 has won!!\nPress reset to start again!");
            gameOver = true
        }
    }
});

resetButton.addEventListener("click", gameReset);