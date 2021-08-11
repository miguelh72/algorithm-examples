// time complexity best, worst, avg = O(n * log(n))
// Immutable

function mergeSort(
  array, 
  compare = (a, b) => a < b
) {
  if (array.length < 2) { return array; }

  const middleIndex = Math.floor(array.length / 2);
  const head = mergeSort(array.slice(0, middleIndex), compare);
  const tail = mergeSort(array.slice(middleIndex), compare);

  const orderedArray = [];
  let tailIndex = 0;
  for (const element of head) {
    while(tailIndex < tail.length && compare(tail[tailIndex], element)) {
      orderedArray.push(tail[tailIndex++]);
    }
    orderedArray.push(element)
  }
  if (tailIndex < tail.length) {
    orderedArray.push(...tail.slice(tailIndex));
  }

  return orderedArray;
}

module.exports = mergeSort;