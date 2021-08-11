/*
    Given a set of non-negative integers, and a value sum, determine if there is 
    a subset of the given set with sum equal to given sum. 

    For example, given the set [3, 34, 4, 12, 5, 2] and sum 9, the output is true [4, 5].
*/

// Still O(n^2) or worse...
function ssp(numArray, targetSum) {
    // Maintain object with keys that are all viable combinations of sums less than target sum
    const sumObj = Object.create(null);
    for (const num of numArray) { // O(n)
        // Iterate through num array and add each element to object, plus sum of the element with each key in object
        if (num === targetSum) { return true; }
        if (num < targetSum) {
            for (const key in sumObj) { // at least O(n)
                // if target sum is found, return true
                const newSum = parseInt(key) + num;
                if (newSum === targetSum) { return true; }
                if (newSum < targetSum) { sumObj[newSum] = true; }
            }
            // also add num to array, but after above step to prevent adding to itself
            sumObj[num] = true;
        }
    }
    // return false
    return false;
}

/* Time complexity of O(n!) :o, need a better solution
// Reduce problem to a smaller version of itself by decreasing target sum by one element
// and then calling recursively the method on this new sum and subset of elements
function ssp(numArray, targetSum) {
    // if array contains one element, see if it equals target sum and return true or false
    if (numArray.length === 1) {
        return numArray[0] === targetSum;
    }
    // for each element of array
    for (const num of numArray) {
        // recursively call ssp with target sum minus that element and the array without that element
        const newSum = targetSum - num;
        if (newSum === 0) { return true; }
        // filter numArray for only elements smaller or equal to target sum
        if (newSum < 0) { continue; }
        const hasSubsetWithSum = ssp(numArray.filter(elem => elem !== num), newSum);
        if (hasSubsetWithSum) { return true; }
    }
    return false;
}
*/

module.exports = ssp;