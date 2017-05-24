// copied from book
const Y = (f) =>
  ( x => f(v => x(x)(v)) )(
    x => f(v => x(x)(v))
  );

// copy factorial function from book
const factorial = Y(function (fac) {
  return function (n) {
    return (n == 0 ? 1 : n * fac(n - 1));
  };
});

// test that it works
const fac0 = factorial(0);
const fac1 = factorial(1);
const fac2 = factorial(5);

console.log(fac0, fac1, fac2);

// let's try to break things apart

// this is the function that is passed to Y
const f = (fac) =>
  (n) => (n === 0) ? 1 : n * fac(n - 1);

// So what does Y(f) look like?
/*
Like this:
  ( x => f(v => x(x)(v)) )(
    x => f(v => x(x)(v))
  );
*/

// Great! That's our factorial function!
// Now let's try to reduce stuff by replacing f with f's innards

//Like this:
/*
  ( x => ((n) => (n === 0) ? 1 : n * (v => x(x)(v))(n - 1)) )(
    x => ((n) => (n === 0) ? 1 : n * (v => x(x)(v))(n - 1))
  );
*/

// I guess now I move function 2 inside of function 1?
/*
  (n) =>
    (n === 0)
    ? 1
    : n * (v => (x => ((n) => (n === 0) ? 1 : n * (v => x(x)(v))(n - 1)))(x => ((n) => (n === 0) ? 1 : n * (v => x(x)(v))(n - 1)))(v))(n - 1)
*/

// That looks a right mess... except that, if I plug in 0, I get 1! Easy, peasey pie!

// And what if it's NOT zero? Then I get the number itself times this mess
/*
(v => (x => ((n) => (n === 0) ? 1 : n * (v => x(x)(v))(n - 1)))(x => ((n) => (n === 0) ? 1 : n * (v => x(x)(v))(n - 1)))(v))(n - 1)
*/

// Let's try to reabstract some of the unabstracting I did:
/*
  (v => (x => f(v => x(x)(v)))(x => f(v => x(x)(v)))(v))(n - 1)
*/

// Can I pass n-1 into this mess?
/*
Like this?
(x => f(v => x(x)(v)))(x => f(v => x(x)(v)))(n - 1)
*/

// I can indeed - and if we take a closer look...
// This is exactly where we started...
// Except that we're calling the factorial function with n - 1 instead of n.
// PERFECT!
