// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

const fib = memoize((n) => {
  if (n < 2) {
    return n;
  }
  return fib(n - 2) + fib(n - 1);
});

function memoize(fn) {
  const cache = {};
  return (...args) => {
    if (cache[args]) {
      return cache[args];
    }
    let result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

function fibWithLoopAndArray(n) {
  const series = [0, 1];
  for (let i = 2; i <= n; i++) {
    series.push(series[i - 2] + series[i - 1]);
  }
  return series[n];
}

function fibWithForLoop(n) {
  if (n < 2) {
    return n;
  }
  let first = 0,
    second = 1,
    val;
  for (let i = 2; i <= n; i++) {
    val = first + second;
    first = second;
    second = val;
  }
  return val;
}

function fibRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibRecursive(n - 2) + fibRecursive(n - 1);
}

module.exports = fib;
