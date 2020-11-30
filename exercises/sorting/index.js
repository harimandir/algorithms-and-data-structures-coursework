// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 1; i--) {
    for (let j = 0; j < i; j++) {
      const left = arr[j];
      const right = arr[j + 1];
      if (left > right) {
        arr[j] = right;
        arr[j + 1] = left;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {}

function mergeSort(arr) {}

function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
