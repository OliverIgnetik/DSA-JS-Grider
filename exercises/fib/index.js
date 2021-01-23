// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// dynamic iterative solution O(N)
// function fib(n) {
//   const fib_seq = [0, 1];
//   if (n === 0 || n === 1) return fib_seq[n];
//   for (let index = 2; index <= n; index++) {
//     fib_seq.push(fib_seq[index - 1] + fib_seq[index - 2]);
//   }
//   return fib_seq[n];
// }

// inefficient recursion O(2^N)
function fib_recursive(n) {
  if (n < 2) return n;
  else return fib_recursive(n - 2) + fib_recursive(n - 1);
}

// memoization solution O(logN)
function fib_memoize(n) {
  const d = {};
  return fib_memoize_(n, d);
}

function fib_memoize_(n, d) {
  if (n in d) return d[n];
  if (n < 2) {
    d[n] = n;
    return d[n];
  } else {
    d[n] = fib_memoize_(n - 2, d) + fib_memoize_(n - 1, d);
    return d[n];
  }
}

// external memoization
// this will check if this input has been calculated or not

// HOWEVER it does not reduce function calls in the recursive fib
// I don't think this is possible
function memoize(fn) {
  let cache = {};
  return function (...args) {
    if (cache[args]) {
      console.log('fetching from cache');
      return cache[args];
    }
    cache[args] = fn.apply(this, args);
    return cache[args];
  };
}

console.log(fib_memoize(7));
module.exports = fib_memoize;
