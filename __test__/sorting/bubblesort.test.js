const bubbleSort = require('../../sorting/bubblesort.js');

test('edge cases', () => {
  expect(bubbleSort([])).toEqual([]);
  expect(bubbleSort([1])).toEqual([1]);
  expect(bubbleSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
  expect(bubbleSort([1, 2])).toEqual([1, 2]);

});


test('number arrays', () => {
  expect(bubbleSort([2, 1])).toEqual([1, 2]);
  expect(bubbleSort([2, 1, 4, 3])).toEqual([1, 2, 3, 4]);
  expect(bubbleSort([1, 2, 3, 0])).toEqual([0, 1, 2, 3]);
  expect(bubbleSort([4, 1, 2, 3])).toEqual([1, 2, 3, 4]);
});
