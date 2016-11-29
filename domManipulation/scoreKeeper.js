// wining players points go green once they win
// user can choose a "play until" number using a drop-down/number picker
// default play-to is 5
// there are button for player one, player two, reset

var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.querySelector("#reset");
var p1Score = 0,
    p2Score = 0; // set both player scores to 0;
p1Button.addEventListener("click", function() {
    p1Score += 1;
    document.querySelector("#p1Score").textContent = p1Score;
    console.log("Player One Scores! Score: ", p1Score);
});
p2Button.addEventListener("click", function() {
    p2Score += 1;
    document.querySelector("#p2Score").textContent = p2Score;
    console.log("Player One Scores! Score: ", p2Score);
});
resetButton.addEventListener("click", function() {
    console.log("Game Reset");
    p1Score = p2Score = 0;
    document.querySelector("#p1Score").textContent = p1Score;
    document.querySelector("#p2Score").textContent = p2Score;
});
