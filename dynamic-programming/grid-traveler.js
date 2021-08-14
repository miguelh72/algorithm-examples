/*
    Say that you are traveling on a 2D grid of size n x m. You begin on the
    top-left corner and your goal is to travel to the bottom-right. You may only
    move down or right.

    Write a function that calculates the number of ways you can reach your goal.

    For example, gridTraveler(2,3) => 3 and gridTraveler(3,3) => 6
*/

// O(n*m) time and space complexity
function gridTraveler(n, m, memo = {}) {
    // if either n or m is equal to one, return one
    if (n === 1 || m === 1) { return 1; }
    // if string [n,m] exist as key in memo, return the value
    const key = (n <= m) ? [n, m].toString() : [m, n].toString(); // allowed by problem symmetry
    if (key in memo) {
        return memo[key];
    }
    // create entry in memo with key [n,m] whose value is the sum of the recursive call to (n-1, m) and (n, m-1)
    memo[key] = gridTraveler(n - 1, m, memo) + gridTraveler(n, m - 1, memo);
    // return the newly obtained sum
    return memo[key];
}

module.exports = gridTraveler;