// my solution
const myCompose = function (...args) {
  if (args.length === 0) {
    return;
  }
  else if (args.length === 1) {
    return args[0];
  }
  else {
    const last = args.pop();
    const nextLast = args.pop();

    const fn = function(x) {
      return nextLast(last(x));
    };

    return myCompose(...args, fn);
  }
};

const plus1 = (x) => x + 1;
const times3 = (x) => x * 3;

const times3plus1 = myCompose(plus1, times3);
console.log(times3plus1(-4));

// book's solution
const compose = (a, ...rest) =>
  rest.length === 0
    ? a
    : (c) => a(compose(...rest)(c))
