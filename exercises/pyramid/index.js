// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';
    for (let col = 0; col < n; col++) {
      if (col <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log([...stair].reverse().join('') + stair.slice(1));
  }
}

function pyramid_recursion(n) {
  return pyramid_recursion_(n, 0, 0);
}
function pyramid_recursion_(n, row, column, level = '') {
  const width = 2 * n - 1;
  const midpoint = Math.floor(width / 2);
  if (row === n) return;
  if (column === width) {
    console.log(level);
    return pyramid_recursion_(n, row + 1, 0);
  }
  let add;
  if (column >= midpoint - row && column <= midpoint + row) add = level + '#';
  else add = level + ' ';

  return pyramid_recursion_(n, row, column + 1, add);
}

pyramid_recursion(2);
module.exports = pyramid;
