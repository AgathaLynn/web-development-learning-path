// todo: copy these ideas (after reading)
// * linked list
// * length
// * copy
// * reverse
// * map

const EMPTY = {};
const ll = {
  first: 1,
  rest: {
    first: 2,
    rest: {
      first: 3,
      rest: EMPTY
    }
  }
};

// get length
const length = (node, len = 0) =>
  node === EMPTY
  ? len
  : length (node.rest, len + 1);

console.log(length(ll));

// make copy
const copy = (node) =>
  node === EMPTY
  ? EMPTY
  : {first: node.first, rest: copy(node.rest)};

console.log(copy(ll));

// reverse
const reverse = (node, result = EMPTY) =>
  node === EMPTY
  ? result
  : reverse(node.rest, {first: node.first, rest: result});

console.log(reverse(ll));

// map
const rMap = (fn, node, result = EMPTY) =>
  node === EMPTY
  ? result
  : rMap(fn, node.rest, {first: fn(node.first), rest: result});

const _map = (fn, node) => reverse(rMap(fn, node));

const square = (x) => x * x;
console.log(_map(square, ll));
