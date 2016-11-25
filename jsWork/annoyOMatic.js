var answer = prompt("are we there yet?");
while (answer.toLowerCase().indexOf("yes") === -1 
	&& answer.toLowerCase().indexOf("yeah") === -1) {
    var answer = prompt("are we there yet?");
}
alert("About damn time!!!");
