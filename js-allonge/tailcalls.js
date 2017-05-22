// tail call versions of functions we've already made
// (my versions, done before reading the book's versions)

const length = ([first, ...rest], len = 0) =>
  (first === undefined) ? len : length(rest, len + 1);

const _map = (fn, [first, ...rest], result = []) =>
  (first === undefined)
  ? result
  : _map(fn, rest, [...result, fn(first)]);

const plus1 = (x) => x + 1;
const wrap = (x) => [x];

console.log(_map(plus1, [1, 2, 3]));
console.log(_map(wrap, [1, 2, 3]));
console.log(_map(wrap, [[]]));

const _fold = (fn, result, [first, ...rest]) =>
  first === undefined
  ? result
  : _fold(fn, fn(first, result), rest);

console.log(_fold((num, result) => [...result, plus1(num)], [], []));
console.log(_fold((num, result) => [...result, plus1(num)] , [], [1, 2, 3, 4]));
console.log(_fold((num, result) => result + (num * 2), 0, [1, 2, 3, 4]));

const factorial = (n, total = 1) =>
  n === 1
  ? total
  : factorial(n - 1, total * n);

console.log(factorial(5));
console.log(factorial(6));
