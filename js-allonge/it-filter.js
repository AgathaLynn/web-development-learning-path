// I tried these before reading the book's implementations, then fixed my
// versions after reading the book's solutions

const filterWith = (fn, collection) => ({
  [Symbol.iterator]() {
    const iterator = collection[Symbol.iterator]();

    return {
      next() {
        do {
          var {value, done} = iterator.next();
        }
        while (!done && !fn(value));
        return {value, done};
      }
    };
  }
});

const isEven = (num) => num % 2 === 0;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var evens = filterWith(isEven, numbers);
for (let even of evens) {
  console.log(even);
}

const untilWith = (fn, collection) => ({
  [Symbol.iterator]() {
    const iterator = collection[Symbol.iterator]();

    return {
      next() {
        let {value, done} = iterator.next();
        done = done || fn(value);
        return {done, value: done ? undefined : value};
      }
    };
  }
});

const canDrink = (num) => num >= 21;

for (let num of untilWith(isEven, numbers)) {
  console.log(num);
}
for (let num of untilWith(canDrink, numbers)) {
  console.log(num);
}
