// If pure functions can contain closures, can a closure contain a pure function? Using only what we've learned so far, attempt to compose a closure that contains a pure function. If you can't, give your reasoning for why it's impossible.

// example (in blocks to keep contained)
// the variables are just for jshint and readability
{
  let pure = (x) => 1;
  let closure = (y) => z + pure;

  let result = (y) => z + (x => 1);
}
