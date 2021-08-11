// Worst case O(n * log(n)), Space complexity O(1)
// Mutated array

function heapSort(array, compare = (a,b) => a < b) {
    // define binary heap start and end
    let end = array.length;
    // while binary heap has more than 1 element
    while (end > 1) {
        // convert heap to a max heap, where each child is less than its parent
        toMaxHeap(array, end, compare);
        // swap the first and last nodes, and remove the last node from binary heap
        [array[0], array[end - 1]] = [array[end - 1], array[0]];
        end--;
    }
    return array;
}

function toMaxHeap(array, end, compare) {
    // iterate from last node towards first, maintaining start boundary
    for (let i = end - 1; i > 0; i--) {
        // determine if you are at a left or right node
        const isLeftNode = i === 1 || i % 2 === 0;
        const parentIndex = Math.round((i - ((isLeftNode) ? 1 : 2)) / 2);

        // if parent is smaller than node, swap with parent.
        if (compare(array[parentIndex], array[i])) {
            [array[parentIndex], array[i]] = [array[i], array[parentIndex]];
        }
    }
}

module.exports = heapSort;