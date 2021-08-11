// Worst case O(N!)
// Mutated input array

function bubbleSort(array, compare = (a, b) => a < b) {
    let cleanPass = false;
    while (!cleanPass) {
        cleanPass = true;
        for (let i = 0; i < array.length - 1; i++) {
            if (compare(array[i + 1], array[i])) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                cleanPass = false;
            }
        }
    }

    return array;
}

module.exports = bubbleSort;