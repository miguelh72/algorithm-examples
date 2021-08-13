const binarySearch = require('../../searching/binary.js');

test('edge cases', () => {
    expect(binarySearch([], 1)).toBe(null);
    expect(binarySearch(['a'], 'a')).toBe(0);
    expect(binarySearch([1, 2, 3, 4, 5, 6], 'a')).toBe(null);
});

test('sorted arrays of varied size', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 1)).toBe(0);
    expect(binarySearch([1, 2, 3, 4, 5, 6], 2)).toBe(1);
    expect(binarySearch([1, 2, 3, 4, 5, 6], 3)).toBe(2);
    expect(binarySearch([1, 2, 3, 4, 5, 6], 6)).toBe(5);
    expect(binarySearch(['a', 'b', 'c', 'd'], 'b')).toBe(1);
});