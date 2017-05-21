// my first pass
const isEmpty = ([first, ...rest]) => first === undefined;

const flatten = ([first, ...rest]) => {
  if (first === undefined) {
    return [];
  }
  if (Array.isArray(first)) {
    return flatten([...first, ...rest]);
  }
  return [first, ...flatten(rest)];
};

console.log(flatten([]));
console.log(flatten([1, [], [2, [3]]]));
console.log(flatten(["foo", [3, 4, []]]));

// book's first pass
const booksflatten = ([first, ...rest]) => {
  if (first === undefined) {
    return [];
  }
  else if (!Array.isArray(first)) {
    return [first, ...flatten(rest)];
  }
  else {
    return [...flatten(first), ...flatten(rest)];
  }
};

console.log(booksflatten([]));
console.log(booksflatten([1, [], [2, [3]]]));
console.log(booksflatten(["foo", [3, 4, []]]));

// note that my version and his fail when the array contains undefined values
console.log(flatten([1, 2, , [3, 4, 5]]));
console.log(booksflatten([1, 2, , [3, 4, 5]]));
