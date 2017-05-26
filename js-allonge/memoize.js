// my version (from before reading their solution)
const lookup = [];

const fibonacci = (x) =>
  lookup[x]
  ? lookup[x]
  : x < 2
    ? lookup[x] = x
    : (lookup[x - 1] = fibonacci(x - 1)) + (lookup[x - 2] = fibonacci(x - 2));

console.log([0, 1, 2, 3, 4, 5, 6, 7, 8].map(fibonacci));
console.log(fibonacci(0));
console.log(fibonacci(7));
console.log(fibonacci(45));

// the book (naturally) separates out concerns
const fib = (x) =>
  x < 2 ? x : fib(x - 2) + fib(x - 1);

const memoize = (fn) => {
  const lookupTable = {};
  return function (...args) {
    const key = JSON.stringify(args);
    return lookupTable[key] || (lookupTable[key] = fn.apply(this, args));
  };
};

const mFib = memoize((x) =>
  x < 2 ? x : mFib(x - 2) + mFib(x - 1)
);

console.log([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(mFib));
console.log(mFib(45));

// the long version
console.log(fib(45));
