// iterator that produces odd Numbers
const odds = (number = 1) => {
  number -= (number % 2 === 0 ? 1 : 2);
  return () => ({done: false, value: number += 2});
} ;

var odd_it = odds();
console.log(odd_it().value);
console.log(odd_it().value);
console.log(odd_it().value);
console.log(odd_it().value);

// squares of the first five odd Numbers

// get first five
const take = (it, num) => {
  let count = 0,
      iter = it();
  return () => {
    count++;
    if (count <= num) {
      return {done: false, value: iter().value};
    }
    else {
      return {done: true};
    }
  };
};

let getOdds = take(odds, 4);
console.log(getOdds());
console.log(getOdds());
console.log(getOdds());
console.log(getOdds());
console.log(getOdds());
console.log(getOdds());
console.log(getOdds());

// make 'em into an array
const toArray = (it) => {
  let arr = [],
      curr;
  while ((curr = it(), !curr.done)) {
    arr.push(curr.value);
  }
  return arr;
};

console.log(toArray(take(odds, 5)));

// square 'em (I'm cheating a little here)
const square = (x) => x * x;
console.log(toArray(take(odds, 5)).map(square));
