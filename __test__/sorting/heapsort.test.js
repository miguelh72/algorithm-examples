const heapSort = require('../../sorting/heapsort.js');

test('edge cases', () => {
  //expect(heapSort([])).toEqual([]);
  //expect(heapSort([1])).toEqual([1]);
  expect(heapSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
  expect(heapSort([1, 2])).toEqual([1, 2]);

});


test('number arrays', () => {
  expect(heapSort([2, 1])).toEqual([1, 2]);
  expect(heapSort([2, 1, 4, 3])).toEqual([1, 2, 3, 4]);
  expect(heapSort([1, 2, 3, 0])).toEqual([0, 1, 2, 3]);
  expect(heapSort([4, 1, 2, 3])).toEqual([1, 2, 3, 4]);
});
