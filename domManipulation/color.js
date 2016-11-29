var randomize = document.querySelector("#randomizer");
var reset = document.querySelector("#reset");
var toggle = document.querySelector("#toggle");
var isPurple = false;
function changeColor() {
    var r, g, b, colorRgb, min, max;
    min = Math.ceil(0);
    max = Math.floor(255);
    r = Math.floor(Math.random() * (max - min)) + min;
    g = Math.floor(Math.random() * (max - min)) + min;
    b = Math.floor(Math.random() * (max - min)) + min;
    return colorRgb = "rgb(" + r + "," + g + "," + b + ")";
}
randomize.addEventListener("click", function() {
    document.body.style.background = changeColor();
});
toggle.addEventListener("click", function() {
	document.body.classList.toggle("purple");
});
reset.addEventListener("click", function() {
    document.body.removeAttribute("style");
    document.body.removeAttribute("class");
});
