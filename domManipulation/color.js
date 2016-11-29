var colorButton = document.querySelector("#colorPicker");

function changeColor() {
    var r, g, b, colorRgb, min, max;
    min = Math.ceil(0);
    max = Math.floor(255);
    r = Math.floor(Math.random() * (max - min)) + min;
    g = Math.floor(Math.random() * (max - min)) + min;
    b = Math.floor(Math.random() * (max - min)) + min;
    colorRgb = "rgb(" + r + "," + g + "," + b + ")";
    document.body.style.background = colorRgb;
    document.querySelector("h2").setAttribute.text("The color of the page is "+colorRgb);
}
colorButton.addEventListener("click", changeColor);
