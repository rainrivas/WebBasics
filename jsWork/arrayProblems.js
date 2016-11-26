function printReverse(array) {
    for (i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

function isUniform(array) {
    var base = array[0];
    var isUniform = true;
    array.forEach(function(currentElem) {
        if (currentElem !== base) {
            isUniform = false;

        }
        return isUniform;
    });
    return isUniform;
    // Without forEach
    /*
    for (i = 1; i < array.length; i++) { // start i at [1] since we already have [0]
        if (array[i] !== base) {
            return false;
        }
    } else return true;
    */
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
    for (i = 1; i < array.length; i++) { // start i at [1] since we already have [0]
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
