mergeSort = require('../../sorting/mergesort.js');

test('edge cases', () => {
  expect(mergeSort([])).toEqual([]);
  expect(mergeSort([1])).toEqual([1]);
  expect(mergeSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
  expect(mergeSort([1, 2])).toEqual([1, 2]);

});


test('number arrays', () => {
  expect(mergeSort([2, 1, 4, 3])).toEqual([1, 2, 3, 4]);
  expect(mergeSort([1, 2, 3, 0])).toEqual([0, 1, 2, 3]);
  expect(mergeSort([4, 1, 2, 3])).toEqual([1, 2, 3, 4]);
  expect(mergeSort([2, 1])).toEqual([1, 2]);
});
