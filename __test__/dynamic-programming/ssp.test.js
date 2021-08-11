const ssp = require('../../dynamic-programming/ssp.js');

test('SSP edge cases', () => {
    expect(ssp([], 3)).toBe(false);
    expect(ssp([7], 7)).toBe(true);
    expect(ssp([7], 2)).toBe(false);
});

test('SSP of arrays of numbers', () => {
    expect(ssp([3, 10, 2, 1, 20], 12)).toBe(true);
    expect(ssp([3, 2], 5)).toBe(true);
    expect(ssp([50, 3, 10, 7, 40, 80], 101)).toBe(false);
    expect(ssp([3, 34, 4, 12, 5, 2], 9)).toBe(true);
    expect(ssp([3, 34, 4, 12, 5, 2], 30)).toBe(false);
});