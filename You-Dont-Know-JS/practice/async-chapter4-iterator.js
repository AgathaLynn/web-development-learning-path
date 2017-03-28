var fibonacciNumbers = (function() {
  var last = 0;
  var curr = 0;

  return {
    [Symbol.iterator]: function() {return this;},
    next: function() {
      var nextVal;

      if (curr === 0) {
        curr = 1;
      }
      else {
        nextVal = curr + last;
        last = curr;
        curr = nextVal;
      }

      return {done: false, value: curr};
    }
  };
})();

// get the first five fibonacci numbers one at a time
console.log(fibonacciNumbers.next().value);
console.log(fibonacciNumbers.next().value);
console.log(fibonacciNumbers.next().value);
console.log(fibonacciNumbers.next().value);
console.log(fibonacciNumbers.next().value);

// use a for-of loop to get the next 20
var count = 0;
for (var fib of fibonacciNumbers) {
  if (count > 20) {
    break;
  }
  console.log("the " + count + "th fibonacci number is " + fib);
  count++;
}
