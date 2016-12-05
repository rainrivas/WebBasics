// Temporary decorative js to show it works
document.querySelector("h1").addEventListener("mouseover", function() {
    this.style.color = "black";
});
document.querySelector("h1").addEventListener("mouseout", function() {
    this.style.color = "white";
});

var newColors = document.querySelector("#new")
var colorTiles = document.querySelectorAll(".square");
var currentRgb = document.querySelector("#currentRgb");
var answerRgb;
function changeColor() {
    var r, g, b, colorRgb, min, max;
    min = Math.ceil(0);
    max = Math.floor(255);
    r = Math.floor(Math.random() * (max - min)) + min;
    g = Math.floor(Math.random() * (max - min)) + min;
    b = Math.floor(Math.random() * (max - min)) + min;
    return colorRgb = "rgb(" + r + "," + g + "," + b + ")";
}

function setAnswerTile() {
    var answerIndex, min, max;
    min = Math.ceil(0);
    max = Math.floor(colorTiles.length - 1);
    answerIndex = Math.floor(Math.random() * (max - min)) + min;
    answerRgb = colorTiles[answerIndex].style.backgroundColor;
    currentRgb.textContent = answerRgb.toUpperCase();
    return answerRgb;
}

newColors.addEventListener("click", function() {
    for (i = 0; i < colorTiles.length; i++) {
        colorTiles[i].style.backgroundColor = changeColor();
    }
    setAnswerTile();
});


for (i = 0; i < colorTiles.length; i++) {
    colorTiles[i].addEventListener("click", function() {
        console.log("Clicked on Tile: " + this.style.backgroundColor);
        if(this.style.backgroundColor===answerRgb){
        	console.log("YOU WIN");
        }
        else{
        	console.log("WRONG. TRY AGAIN!");
        }
    });
}
