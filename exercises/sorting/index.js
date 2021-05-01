// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 1; i--) {
    let swapped = false;
    for (let j = 0; j < i; j++) {
      if (arr[j + 1] < arr[j]) {
        swapped = true;
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

// O(N^2) with less memory writing then bubblesort
// the reduction in writing memory is the main advantage
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min_index = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min_index]) min_index = j;
    }
    let reference = arr[min_index];
    arr[min_index] = arr[i];
    arr[i] = reference;
  }
  return arr;
}

// O(NlogN) time complexity
// O(N) space complexity
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
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const arr = [4, 1, 9, 12, 3];

console.log('====================================');
console.log(selectionSort(arr));
console.log('====================================');

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
