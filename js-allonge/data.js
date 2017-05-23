// building blocks
const K = (x) => (y) => x;
const I = (x) => x;
const V = (x) => (y) => (z) => z(x)(y);

// getting Data
const first = K;
const second = K(I);

// can I store more than two items? (say: (1, 2, 3))
const three = V(3)(null);
const two = V(2)(three);
const one = V(1)(two);

// it's almost exactly like navigating a linked list!
console.log(three(first));
console.log(three(second));
console.log(two(first));
console.log(two(second)(first));
console.log(two(second)(second));
console.log(one(first));
console.log(one(second)(first));
console.log(one(second)(second)(first));

// building stuff without naming every pair
const names = V('Henry')(V('Jessie')(V('Violet')(V('Benny')(null))));

console.log(names(first));
console.log(names(second)(first));
console.log(names(second)(second)(first));
console.log(names(second)(second)(second)(first));

// can I calculate length? (yeah - although I'm probably breaking some rules!)
const length = (l) => {
  let len = 0;
  var curr = names;
  while (curr) {
    len++;
    curr = curr(second);
  }
  return len;
};

console.log(length(names));
