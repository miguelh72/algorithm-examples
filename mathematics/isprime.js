// O(sqrt(n))
function isPrime(num) {
    if (num < 2) { return false; }
    // Define a test number and set it to the floor of sqrt of num
    let testNum = Math.floor(Math.sqrt(num));
    // While test number > 1
    while (testNum > 1) {
        // if test number can divide num, return false
        if (num % testNum === 0) { return false; }
        // decrease test num
        testNum--;
    }
    return true;
}


/*
    O(sqrt(n)) time and space complexity
    Maximum call stack problems for very large numbers

function isPrime(num, testNum) {
    if (num < 2) { return false; }
    // test division against all numbers up to sqrt(n)
    if (testNum === undefined) {
        // first run, calculate sqrt, if it is a whole number return true
        testNum = Math.sqrt(num);
        if (testNum % 1 === 0) { return false; }
        testNum = Math.floor(testNum);
    }

    //console.log({num, testNum});

    // if testNum is 0, return true
    if (testNum === 1) { return true; }
    // divide number by testNum
    // If division has no remainder, return true
    if (num % testNum === 0) { return false; }
    // else call recursively with testNum - 1
    return isPrime(num, --testNum);
}
*/
module.exports = isPrime;