// my 'building block' functions
const mapWith = (fn) =>
  (arr) => arr.map(fn);

const getWith = (attr) =>
  (obj) => obj[attr];

const pluckWith = (attr) =>
  mapWith(getWith(attr));

// check that this works
const pets = [
  {name: 'gremlin', species: 'cat'},
  {name: 'chance', species: 'bird'},
  {name: 'murphy', species: 'dog'}
];

console.log(pluckWith('name')(pets));

// let's try a trickier array
const animals = [
  pets,
  {name: 'daisy', species: 'dog'},
  {name: 'smokey', species: 'bear'}
];

// a 'deep map' (done before reading the book's solution)
const deepMap = (fn) =>
  ([first, ...rest]) => {
    if (first === undefined) {
      return [];
    }
    else if (Array.isArray(first)) {
      return [...deepMap(fn)(first), ...deepMap(fn)(rest)];
    }
    else {
      return [fn(first), ...deepMap(fn)(rest)];
    }
  };

console.log(deepMap(getWith('name'))(animals));

// Ah... so the book's deep map actually does something different:
// it preserves the original arrays. Can I modify mine to do that?
const deepMap2 = (fn) =>
  (arr) =>
    arr.map(
      (item) =>
        Array.isArray(item) ? deepMap2(fn)(item) : fn(item)
    );

  console.log(deepMap2(getWith('name'))(animals));
