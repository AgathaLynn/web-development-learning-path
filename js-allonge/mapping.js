// my attempt
const _map = (fn, [first, ...rest]) =>
  (first === undefined) ? [] : [fn(first), ..._map(fn, rest)];

const plus1 = (x) => x + 1;

console.log(_map(plus1, [1, 2, 3])); // passes
console.log(_map(plus1, [1, 2, , 4])); // fails - array has undefined elements

// his is basically the same, I'm not copying it out

// here's his "foldWith" - a generalization
const foldWith = (fn, terminalValue, [first, ...rest]) =>
  first === undefined
    ? terminalValue
    : fn(first, foldWith(fn, terminalValue, rest));

// used for mapping - my version
var result = foldWith((num, rest) => [plus1(num)].concat(rest), [], [1, 2, 3, 4]);
console.log(result);

// re-written to more closely mimick their way
result = foldWith((first, rest) => [plus1(first), ...rest], [], [1, 2, 3, 4]);
console.log(result);
