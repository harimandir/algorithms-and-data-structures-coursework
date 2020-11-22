// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

const chunk = chunkWithArrayReduce;

function chunkWithArrayReduce(array, size) {
  const reduced = array.reduce(
    (arr, val) => {
      const chunk = arr[arr.length - 1];
      if (chunk.length === size) {
        arr.push([val]);
      } else {
        chunk.push(val);
      }
      return arr;
    },
    [[]]
  );
  return reduced;
}

function chunkWithForOf(array, size) {
  const chunks = [];
  for (let val of array) {
    const chunk = chunks[chunks.length - 1];
    if (chunk && chunk.length < size) {
      chunk.push(val);
    } else {
      chunks.push([val]);
    }
  }
  return chunks;
}

function chunkWithModulo(array, size) {
  const chunks = [];
  let chunk = [];
  for (let i = 0; i < array.length; i++) {
    chunk.push(array[i]);
    if ((i + 1) % size === 0) {
      chunks.push(chunk);
      chunk = [];
    }
  }
  if (chunk.length) {
    chunks.push(chunk);
  }
  return chunks;
}

module.exports = chunk;
