// sum elements of array (with recursion)
const sum = ([first, ...rest], total = 0) =>
  (first === undefined)
  ? total
  : sum(rest, total + first)

console.log(sum([1, 2, 3, 4, 5]));

// using fold
const fold = (fn, [first, ...rest], result = 0) =>
  first === undefined
  ? result
  : fold(fn, rest, fn(first, result))

const add = (x, y) => x + y;
const _sum = (arr) => fold(add, arr);

console.log(_sum([1, 2, 3, 4, 5]));

// Note: book uses partial application of parameter
