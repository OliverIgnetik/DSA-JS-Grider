// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let i = 0; i < n; i++) {
    let result = ' '.repeat(n).split('');
    for (let j = 0; j <= i; j++) {
      result[j] = '#';
    }
    console.log(result.join(''));
  }
}

function steps_alt(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';
    for (let col = 0; col < n; col++) {
      if (col <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}

// using recursive functions with multiple inputs
function steps_recursive(n) {
  steps_recursive_(n, 0, 0);
}

function steps_recursive_(n, row, column, stair = '') {
  if (row === n) return;
  if (n === column) {
    t;
    console.log(stair);
    return steps(n, row + 1, 0);
  }
  if (column <= row) return steps(n, row, column + 1, stair + '#');
  else return steps(n, row, column + 1, stair + ' ');
}

steps_recursive(3);

module.exports = steps;
