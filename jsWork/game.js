// create secretNum
var secretNum = 4;

// ask for guess
var guess = prompt("Guess a number");

// check guess
if(secretNum===Number(guess)){
	alert("Awww Yisss!! Good guess!");
}
else {
	alert("GG you guess wrong");
}