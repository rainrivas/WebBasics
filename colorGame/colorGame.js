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
var answerRgb;
var difficulty = 6; // use for answer setting, defaults to hard (6 tiles)

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

function gameOver() {
    document.querySelector(".jumbotron").style.backgroundColor = answerRgb;
    winLabel.hidden=false;
}

// New Colors/New Game Event
newColors.addEventListener("click", function() {
	winLabel.hidden=true;
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
    // changeColor()
    for (i = 0; i < difficulty; i++) {
        colorTiles[i].style.backgroundColor = changeColor();
    }
    // setAnswer
    setAnswerTile();
});

// hard game event
hard.addEventListener("click", function() {
    difficulty = 6; // set the game to easy
    // changeColor()
    for (i = 0; i < difficulty; i++) {
        colorTiles[i].style.backgroundColor = changeColor();
    }
    // hide the 3 of tiles, set them to bg #232323
    for (i = difficulty; i < colorTiles.length; i++) {
        colorTiles[i].style.backgroundColor = "#232323";
    }
    // setAnswer
    setAnswerTile();
});

// Handling the tile clicks
for (i = 0; i < colorTiles.length; i++) {
    colorTiles[i].addEventListener("click", function() {
        console.log("Clicked on Tile: " + this.style.backgroundColor);
        if (this.style.backgroundColor === answerRgb) {
            console.log("YOU WIN");
            gameOver();
        } else {
            console.log("WRONG. TRY AGAIN!");
            this.style.backgroundColor = "#232323"; // Set bg equal to body bg
        }
    });
}
document.addEventListener('DOMContentLoaded', function() {
    newColors.click();
}, false);
