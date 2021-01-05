// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const result = [];
  let chunk = [];
  for (const ele of array) {
    if (chunk.length === size) {
      // add the subarray to the result
      result.push(chunk);
      // reset the subarray
      chunk = [];
      chunk.push(ele);
    } else {
      // keep adding elements until the size of the subarray equals size parameter
      chunk.push(ele);
    }
  }
  // we don't want to add an empty array
  if (chunk.length === 0) {
    return result;
  } else {
    // add the leftovers
    result.push(chunk);
    return result;
  }
}

function chunk_alt(array, size) {
  const chunked = [];
  let index = 0;

  // the iteration increment is more flexbile
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

console.log(chunk([1, 2, 3, 4, 5], 2));
module.exports = chunk;
