// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const charMap = new Map();
  for (const char of stringA) {
    if (charMap.has(char)) {
      charMap.set(char, charMap.get(char) + 1);
    } else {
      charMap.set(char, 1);
    }
  }

  for (const char of stringB) {
    charMap.set(char, charMap.get(char) - 1);
  }

  //   for (const char of charMap.keys()) {
  //     if (charMap.get(char) !== 0) return false;
  //   }
  //   return true;
  return [...charMap.values()].every((ele) => ele === 0);
}

console.log('====================================');
console.log(anagrams('olli', 'illo'));
console.log('====================================');

module.exports = anagrams;
