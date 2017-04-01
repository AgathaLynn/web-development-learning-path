/* using yield* generator() */

function* cats() {
  yield "Jeffrey";
  yield "Gremlin";
}

function* dogs() {
  yield "Murphy";
}

function* birds() {
  yield "Chance";
}

function* pets() {
  yield* cats();
  yield* dogs();
  yield* birds();
}

for (var pet of pets()) {
  console.log(pet);
}

/* delegating messages */

function* joke() {
  yield "Knock, Knock";
  yield "Boo";
  yield "Aww. Don't cry. I didn't mean to scare you!";
}

var it = joke();

console.log(it.next().value);
console.log("Who's there?");
var line = it.next().value;
console.log(line + " who?");
console.log(it.next().value);

/* and now in the other direction */

function* run_joke() {
  console.log("Who's there?");
  console.log((yield null) + " who?");
}

var it1 = run_joke();

console.log("Knock, Knock!");
it1.next();
console.log("Cows go");
it1.next("Cows go");
console.log("No, silly. Cows go MOO!");
