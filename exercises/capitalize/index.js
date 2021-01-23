// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function capitalize_alt_1(str) {
  const words = [];
  for (const word of str.split(' ')) {
    words.push(word.charAt(0).toUpperCase() + word.slice(1));
  }
  return words.join(' ');
}

function capitalize_alt_2(str) {
  let res = '';
  // assumes that the first letter is capitalized
  let prev = ' ';
  [...str].forEach((char) => {
    if (prev === ' ') res += char.toUpperCase();
    else res += char;
    prev = char;
  });
  return res;
}

module.exports = capitalize_alt_2;
