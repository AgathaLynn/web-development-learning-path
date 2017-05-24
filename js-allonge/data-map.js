// mapwith turns function into a mapper
const mapWith = (fn) =>
  (list) => list.map(fn);

// some examples
const lst = [1, 2, 3, 4, 'happiness'];
console.log(
  mapWith((x) => x + 2)(lst)
);
console.log(
  mapWith((x) => typeof x === 'number')(lst)
);

// function to return squares of array
const square = mapWith((x) => x * x);
console.log(square(lst));
