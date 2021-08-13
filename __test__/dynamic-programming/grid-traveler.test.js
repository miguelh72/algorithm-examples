const gridTraveler = require('../../dynamic-programming/grid-traveler.js');

test('base cases', () => {
    expect(gridTraveler(1, 1)).toBe(1);
    expect(gridTraveler(1, 5)).toBe(1);
    expect(gridTraveler(8, 1)).toBe(1);
});

test('small grids', () => {
    expect(gridTraveler(2, 2)).toBe(2);
    expect(gridTraveler(2, 3)).toBe(3);
    expect(gridTraveler(3, 2)).toBe(3);
    expect(gridTraveler(2, 4)).toBe(4);
    expect(gridTraveler(5, 2)).toBe(5);
    expect(gridTraveler(3, 3)).toBe(6);
    expect(gridTraveler(3, 4)).toBe(10);
});