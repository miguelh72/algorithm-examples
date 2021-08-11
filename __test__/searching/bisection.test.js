const bisectionSearch = require('../../searching/bisection.js');

test('edge cases', () => {
    expect(bisectionSearch([], 1)).toBe(null);
    expect(bisectionSearch(['a'], 'a')).toBe(0);
    expect(bisectionSearch([1, 2, 3, 4, 5, 6], 'a')).toBe(null);
});

test('sorted arrays of varied size', () => {
    expect(bisectionSearch([1, 2, 3, 4, 5, 6], 1)).toBe(0);
    expect(bisectionSearch([1, 2, 3, 4, 5, 6], 2)).toBe(1);
    expect(bisectionSearch([1, 2, 3, 4, 5, 6], 3)).toBe(2);
    expect(bisectionSearch([1, 2, 3, 4, 5, 6], 6)).toBe(5);
    expect(bisectionSearch(['a', 'b', 'c', 'd'], 'b')).toBe(1);
});