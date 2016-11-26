function printReverse(array) {
    for (i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

function isUniform(array) {
    var base = array[0];
    var isUniform = true;
    array.forEach(function(currentElem) {
        if (currentElem != base) {
            isUniform = false;

        }
        return isUniform;
    });
    return isUniform;
}

function sumArray(array) {
    // add numbers in array and return sum
    // assumes array is nums only
    var sum = 0; // start sum at 0;
    array.forEach(function(addTo) {
        sum += addTo;
    });
    return sum;
}

function max(array) {
    var max = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
