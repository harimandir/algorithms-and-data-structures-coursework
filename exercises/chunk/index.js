// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

const chunk = chunkWithArraySlice;

function chunkWithArraySlice(array, size) {
  const chunks = [];
  let i = 0;
  while (i < array.length) {
    chunks.push(array.slice(i, i + size));
    i += size;
  }
  return chunks;
}

function chunkWithArrayReduce(array, size) {
  return array.reduce((result, val) => {
    const chunk = result[result.length - 1];
    if (!chunk || chunk.length === size) {
      result.push([val]);
    } else {
      chunk.push(val);
    }
    return result;
  }, []);
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
