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

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      let min = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = min;
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const midpoint = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, midpoint));
  const right = mergeSort(arr.slice(midpoint));
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  result.push(...left, ...right);
  return result;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
