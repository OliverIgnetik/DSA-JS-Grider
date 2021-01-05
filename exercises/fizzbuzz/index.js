// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log('fizzbuzz');
    else if (i % 3 === 0) console.log('fizz');
    else if (i % 5 === 0) console.log('buzz');
    else console.log(i);
  }
}

function fizzBuzz_alt(n) {
  for (let i = 1; i <= n; i++) {
    let result = '';
    let divisible = false;
    if (i % 3 === 0) {
      result += 'fizz';
      divisible = true;
    }
    if (i % 5 === 0) {
      result += 'buzz';
      divisible = true;
    }
    if (!divisible) {
      result = i;
    }
    console.log(result);
  }
}

function fizzbuzz_ternary(n) {
  for (let i = 1; i <= n; i++) {
    let result =
      i % 3 === 0
        ? i % 5 === 0
          ? 'fizzbuzz'
          : 'fizz'
        : i % 5 === 0
        ? 'buzz'
        : i;
    console.log(result);
  }
}

fizzbuzz_ternary(15);
module.exports = fizzBuzz;
