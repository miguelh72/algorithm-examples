// worst case O(n * log(n)) with median approach, otherwise O(n^2)
// Mutated array in place

function quickSort(array, low = 0, high = array.length, compare = (a, b) => a < b) {
    if (high - low < 2) { return array; }

    const pivotIndex = partition(array, low, high, compare);
    quickSort(array, low, pivotIndex);
    quickSort(array, pivotIndex + 1, high);
    return array;
}

function partition(array, low, high, compare) {
    let pivotIndex = high - 1; 
    // We can improve this by taking median of low, high, and Math.floot(high - low);
    if (high - low > 2) {
        const left = low, middle = Math.floor((high - low - 1) / 2), right = high - 1;
        let newPivot = pivotIndex;
        if (compare(array[left], array[middle])) {
            newPivot = (compare(array[middle], array[right])) ? middle : right;
        } else {
            newPivot = (compare(array[left], array[right])) ? left : right;
        }
        [array[newPivot], array[pivotIndex]] = [array[pivotIndex], array[newPivot]];
    }

    let left = low, right = pivotIndex - 1;
    while (left <= right) {
        while (compare(array[left], array[pivotIndex])) { 
            left++; 
        }
        while (compare(array[pivotIndex], array[right])) { 
            right--; 
        }
        if (left <= right) { 
            [array[left], array[right]] = [array[right], array[left]];
            left++; right--;
        }
    }

    if (right < left) {
        if (left === pivotIndex) { return pivotIndex; } // already in order
        [array[left], array[pivotIndex]] = [array[pivotIndex], array[left]];
        return left;
    }
}

module.exports = quickSort;