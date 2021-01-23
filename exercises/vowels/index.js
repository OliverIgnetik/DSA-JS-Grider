// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let count = 0;
  for (const char of str.toLowerCase()) {
    if (vowels.has(char)) count++;
  }
  return count;
}

function vowels_alt(str) {
  return [...str.toLowerCase()].reduce(
    (acc, currValue) => acc + ['a', 'e', 'i', 'o', 'u'].includes(currValue),
    0,
  );
}

// regEx expression is case insensitive
function vowels_regEx(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels_regEx;
