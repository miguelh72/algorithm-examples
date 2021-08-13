const permutations = require('../../mathematics/permutations.js');

test('edge cases', () => {
    expect(permutations([])).toEqual([]);
    expect(permutations([2])).toEqual([[2]]);
});

test('permutations of 4 elements', () => {
    const perm4 = permutations([1, 2, 3, 4]);

    const perm4expected = [
        [1, 2, 3, 4],
        [2, 1, 3, 4],
        [3, 1, 2, 4],
        [1, 3, 2, 4],
        [2, 3, 1, 4],
        [3, 2, 1, 4],
        [3, 2, 4, 1],
        [2, 3, 4, 1],
        [4, 3, 2, 1],
        [3, 4, 2, 1],
        [2, 4, 3, 1],
        [4, 2, 3, 1],
        [4, 1, 3, 2],
        [1, 4, 3, 2],
        [3, 4, 1, 2],
        [4, 3, 1, 2],
        [1, 3, 4, 2],
        [3, 1, 4, 2],
        [2, 1, 4, 3],
        [1, 2, 4, 3],
        [4, 2, 1, 3],
        [2, 4, 1, 3],
        [1, 4, 2, 3],
        [4, 1, 2, 3],
    ]

    expect(perm4).toHaveLength(perm4expected.length);
    for (const perm of perm4expected) {
        expect(perm4).toContainEqual(perm);
    }
});