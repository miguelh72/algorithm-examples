const lis = require('../../dynamic-programming/lis.js');

test('LIS size for edge cases', () => {
    expect(lis([])).toBe(0);
    expect(lis([7])).toBe(1);
});

test('LIS size for array of numbers', () => {
    expect(lis([3, 10, 2, 1, 20])).toBe(3);
    expect(lis([3, 2])).toBe(1);
    expect(lis([50, 3, 10, 7, 40, 80])).toBe(4);
    expect(lis([10, 22, 9, 33, 21, 50, 41, 60, 80])).toBe(6);
    expect(lis([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(10);
});