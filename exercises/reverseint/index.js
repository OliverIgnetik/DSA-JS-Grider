// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Math.sign(n)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign

// parseInt(n)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

function toArray(n) {
  return [...n.toString()];
}

function reverse(arr) {
  return arr.reduce((rev, char) => char + rev, '');
}

function reverseInt(n) {
  if (n === 0) return 0;
  // parseInt does not pay attention to sign
  return parseInt(reverse(toArray(n))) * Math.sign(n);
}

function reverseInt2(n) {
  return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
}

console.log('====================================');
console.log(reverseInt(-25));
console.log('====================================');

module.exports = reverseInt;
