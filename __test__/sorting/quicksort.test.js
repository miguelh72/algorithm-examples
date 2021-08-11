const quickSort = require('../../sorting/quicksort.js');

test('edge cases', () => {
  expect(quickSort([])).toEqual([]);
  expect(quickSort([1])).toEqual([1]);
  expect(quickSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
  expect(quickSort([1, 2])).toEqual([1, 2]);

});


test('number arrays', () => {
  expect(quickSort([2, 1])).toEqual([1, 2]);
  expect(quickSort([2, 1, 4, 3])).toEqual([1, 2, 3, 4]);
  expect(quickSort([1, 2, 3, 0])).toEqual([0, 1, 2, 3]);
  expect(quickSort([4, 1, 2, 3])).toEqual([1, 2, 3, 4]);
});
