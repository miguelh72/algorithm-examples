/*
	Given a set of non-negative integers, and a value sum, determine if there is 
	a subset of the given set with sum equal to given sum. 

	For example, given the set [3, 34, 4, 12, 5, 2] and sum 9, the output is true [4, 5].
*/

// O(2^n) time and space complexity
function ssp(numArray, targetSum) {
	// Maintain object with keys that are all viable combinations of sums less than target sum
	const sumObj = Object.create(null);
	for (const num of numArray) {
		// Iterate through num array and add each element to object, plus sum of the element with each key in object
		if (num === targetSum) {
			return true;
		}
		if (num < targetSum) {
			for (const key in sumObj) {
				// if target sum is found, return true
				const newSum = parseInt(key) + num;
				if (newSum === targetSum) {
					return true;
				}
				if (newSum < targetSum) {
					sumObj[newSum] = true; // number of keys double at each step in worst case
				}
			}
			// also add num to array, but after above step to prevent adding to itself
			sumObj[num] = true;
		}
	}
	return false;
}

module.exports = ssp;
