/*
Code samples - based on examples in book -
made while working on Async & Performance
Chapter 4 (Generators)
*/

// version made using closure
var fibonacciFunction = (function() {
  var fib_curr = 0;
  var fib_last = 0;

  return function() {
    var next = fib_curr === 0 ? 1 : fib_curr + fib_last;

    fib_last = fib_curr;
    fib_curr = next;

    return fib_curr;
  };
})();

console.log("The 0th fibonacci number is " + fibonacciFunction());
console.log("The 1th fibonacci number is " + fibonacciFunction());
console.log("The 2th fibonacci number is " + fibonacciFunction());
console.log("The 3th fibonacci number is " + fibonacciFunction());
console.log("The 4th fibonacci number is " + fibonacciFunction());

// version made using generator
function* fibonacciGenerator() {
  var last = 0;
  var curr = 1;

  // generate first number in sequence
  yield 1;

  // let while loop handle the rest
  while (true) {
    let next = curr + last;

    last = curr;
    curr = next;

    yield curr;
  }
}

var it = fibonacciGenerator();
console.log("The next fibonacci number is " + it.next().value);
console.log("The next fibonacci number is " + it.next().value);
console.log("The next fibonacci number is " + it.next().value);
console.log("The next fibonacci number is " + it.next().value);
console.log("The next fibonacci number is " + it.next().value);
