// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const map = new Map();
  for (let char of str) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }
  // using mergesort would be good if you needed to provide the letters sorted in order
  // const sortedMap = mergeSort([...map.entries()]);

  // it's more efficient to use a greedy algorithm with O(N)
  let maxChar = '';
  let max = 0;
  for (let char of map.keys()) {
    if (map.get(char) > max) {
      max = map.get(char);
      maxChar = char;
    }
  }
  return maxChar;
  //   return sortedMap[0][0];
}

// mergeSort descending for map structure
function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex][1] > right[rightIndex][1]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(maxChar('seeeeeed'));

module.exports = maxChar;
