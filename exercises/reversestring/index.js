// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  if (str.length === 0) {
    return Error('Need a string of more then one element');
  }
  if (str.length === 1) {
    return str;
  }

  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
}

function reverse2(str) {
  return [...str].reverse().join('');
}

function reverse3(str) {
  const result = [];
  for (let i = str.length - 1; i >= 0; i--) {
    result.push(str[i]);
  }
  return result.join('');
}

// reverse4 and reverse5 are identical
function reverse4(str) {
  let reversed = '';
  for (const character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

// notice [...str] <=> str.split('')
function reverse5(str) {
  return [...str].reduce((reversed, character) => character + reversed, '');
}

// console.log('====================================');
// console.log(reverse5('abc'));
// console.log('====================================');

module.exports = reverse;
