/*
    The Longest Increasing Subsequence (LIS) problem is to find the length of the longest subsequence 
    of a given sequence such that all elements of the subsequence are sorted in increasing order. 
    For example, the length of LIS for {10, 22, 9, 33, 21, 50, 41, 60, 80} is 6 and LIS is 
    {10, 22, 33, 50, 60, 80}.

    Optimal solution has O(n * log(n)) time and O(n) space complexity.
*/

// O(n * log(n))
function lis(numArray) {
    if (numArray.length === 0) { return 0; }
    // maintain array of lowest nth LIS where array index + 1 is length of LIS
    const lisArray = [[numArray.shift()]];
    // update array of LIS accordingly with each value shifted from numArray
    while (numArray.length > 0) { // O(n)
        const nextValue = numArray.shift();
        // does the value replace 0th case?
        if (nextValue < lisArray[0][0]) { lisArray[0][0] = nextValue; }
        for (let i = 0; i < lisArray.length; i++ ) { // O(log(n))
            // each nth LIS tail has to be checked to see if value can be added at end.
            if (nextValue > lisArray[i][lisArray[i].length - 1]) {
                // If we can create an n+1 LIS then we must check the last value of this list 
                // against the current n+1 LIS, and keep the one with the lowest value
                if (lisArray[i+1] === undefined || nextValue < lisArray[i+1][lisArray[i+1].length - 1]) {
                    lisArray[i+1] = [...lisArray[i], nextValue];
                }
            }
        }
    }
    // return length of last index if array of LIS lists
    return lisArray[lisArray.length - 1].length;
}

module.exports = lis;