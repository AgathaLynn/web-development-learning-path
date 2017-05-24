// flip and maybe curry
const flip = (fn) =>
  (first, second = undefined) =>
    second === undefined
    ? (second) => fn(second, first)
    : fn(second, first);

// testing?
const subtract = (x, y) => x - y;
const subtract10 = flip(subtract)(10);
const ident = flip(subtract)(0);
const negate = flip(flip(subtract))(0); // yes, this is a silly way to accomplish this task. But it works

console.log(subtract10(17));
console.log(subtract(5, 4));
console.log(flip(subtract)(5, 4));

console.log(ident(11));
console.log(negate(11));
