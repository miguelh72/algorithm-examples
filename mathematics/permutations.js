// Based on Steinhaus–Johnson–Trotter algorithm
// O(n!) time and space complexity
function permutations(array, index = 0, permArray = []) {
    // if index is equal to length of array return the permutation array
    if (index === array.length) { return permArray; }
    // if index is zero, push array with first element of array to the permutation Array and call recursively
    if (index === 0) { return permutations(array, ++index, [[array[0]]]); }
    // create an empty outptu array
    const outputArray = [];
    // for each array in the permutation array
    for (let i = 0; i < permArray.length; i++) {
        if (i % 2 === 0) {
            // if index of the permutation array (i) is odd create a descending for loop and push an array with the element in array[index] at each perm i position
            for (let j = permArray[0].length; j >= 0; j--) {
                outputArray.push([...permArray[i].slice(0, j), array[index], ...permArray[i].slice(j)]);
            }
        } else {
            // if index of the permutation array (i) is even create a ascending for loop and push an array with the element in array[index] at each perm i position
            for (let j = 0; j <= permArray[0].length; j++) {
                outputArray.push([...permArray[i].slice(0, j), array[index], ...permArray[i].slice(j)]);
            }
        }
    }
    // call recursively increasing index by one, and setting the permArray to the output array
    return permutations(array, ++index, outputArray);
}

module.exports = permutations;