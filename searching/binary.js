// If input array is sorted, then search will work with worst case O(log(n))

function binarySearch(sortedArray, element, left = 0, right = sortedArray.length) {
    // termination condition: If only one element between left and right, check that element and return it or return null
    if (right - left === 0) { return null; }
    if (right - left === 1) {
        return (sortedArray[left] === element) ? left : null;
    }
    // select a median index between left and right
    const median = Math.round((right + left) / 2);
    // decide if element is between left and median or median and right
    if (element < sortedArray[median]) {
        right = median;
    } else {
        left = median;
    }
    // recursively call bisectionSearch with new search indices
    return binarySearch(sortedArray, element, left, right);
}

module.exports = binarySearch;