// Temporary decorative js to show it works
document.querySelector("h1").addEventListener("mouseover", function() {
    this.style.color = "black";
});
document.querySelector("h1").addEventListener("mouseout", function() {
    this.style.color = "white";
});

var newColors = document.querySelector("#new")
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var colorTiles = document.querySelectorAll(".square");
var currentRgb = document.querySelector("#currentRgb");
var winLabel = document.getElementsByTagName("H2")[0];
var tryAgain = document.getElementById("tryAgain");
var difficulty = 6; // use for answer setting, defaults to hard (6 tiles)
var gameOver = false;
var answerRgb;

function changeColor() {
    var r, g, b, colorRgb, min, max;
    min = Math.ceil(0);
    max = Math.floor(256);
    r = Math.floor(Math.random() * (max - min)) + min;
    g = Math.floor(Math.random() * (max - min)) + min;
    b = Math.floor(Math.random() * (max - min)) + min;
    return colorRgb = "rgb(" + r + "," + g + "," + b + ")";
}

function setAnswerTile() {
    var answerIndex, min, max;
    min = Math.ceil(0);
    max = Math.floor(difficulty); // Num of tiles, math.random has an exclusive ceiling so it has proper indexing
    answerIndex = Math.floor(Math.random() * (max - min)) + min;
    answerRgb = colorTiles[answerIndex].style.backgroundColor;
    currentRgb.textContent = answerRgb.toUpperCase();
    return answerRgb;
}

function endGame() {
    document.querySelector(".jumbotron").style.backgroundColor = answerRgb;
    for (i = 0; i < colorTiles.length; i++) {
        colorTiles[i].style.backgroundColor = answerRgb;
    }
    tryAgain.hidden = true;
    winLabel.hidden = false;
    gameOver = true;
}

// New Colors/New Game Event
newColors.addEventListener("click", function() {
    gameOver = false;
    winLabel.hidden = true;
    tryAgain.hidden = true;
    for (i = 0; i < difficulty; i++) {
        colorTiles[i].style.backgroundColor = changeColor();
    }
    setAnswerTile();
});

// easy game event
easy.addEventListener("click", function() {
    difficulty = 3; // set the game to easy
    // hide 3 of tiles, set them to bg #232323
    for (i = difficulty; i < colorTiles.length; i++) {
        colorTiles[i].style.backgroundColor = "#232323";
    }
    // change colors and set answer
    newColors.click();
});

// hard game event
hard.addEventListener("click", function() {
    difficulty = 6; // set the game to easy
    // change colors and set answer
    newColors.click();
});

// Handling the tile clicks
for (i = 0; i < colorTiles.length; i++) {
    colorTiles[i].addEventListener("click", function() {
        if (!gameOver) {
            console.log("Clicked on Tile: " + this.style.backgroundColor);
            if (this.style.backgroundColor === answerRgb) {
                endGame();
            } else {
                tryAgain.hidden = false;
                this.style.backgroundColor = "#232323"; // Set bg equal to body bg
            }
        }
    });
}

// Randomize colors on page load
document.addEventListener('DOMContentLoaded', function() {
    newColors.click();
}, false);
