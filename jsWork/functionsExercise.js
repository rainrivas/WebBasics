function isEven(num) {
    return num % 2 === 0;
}

function factorial(num) {
    if (num === 0) {
        return 1;
    }

    var result = num;

    for (i = num - 1; i > 1; i--) {
        result *= i;
    }
    return result;
}

function kebabToSnake(str){
	var sankeStr = str.replace(/-/g,"_");
	return snakeStr;
}