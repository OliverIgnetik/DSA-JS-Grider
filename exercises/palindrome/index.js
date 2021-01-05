const reversestring = require('../reversestring');

// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  if (str.length === 0) return Error('Empty string!');
  if (str.length === 1) return true;
  return reversestring(str) === str;
}

function palindrome2(str) {
  return [...str].every((char, index) => char === str[str.length - 1 - index]);
}

console.log('====================================');
console.log(palindrome2('aba'));
console.log('====================================');

module.exports = palindrome;
