
// iterating over a string
var name = "Amy";

// with a while loop
var name_it = name[Symbol.iterator]();

var curr = name_it.next();
while(!curr.done) {
  console.log(curr.value);
  curr = name_it.next();
}

// with a for-of loop
var name_it1 = name[Symbol.iterator]();
for (var letter of name_it1) {
  console.log(letter);
}

// the "normal" way - no iterator involved
for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}

// this output LOOKS the same... but kind of isn't
console.log(name.split("").join("\n"));

// strings are iterables, so this also works
for (var char of name) {
  console.log(char);
}

// make-your-own iterator! (skiponacci sequence)
var Skip = {
  [Symbol.iterator]() {
    var n1 = 1, n2 = 1, n3 = 1;
    return {
      [Symbol.iterator]() { return this; },

      next() {
        var curr = n3;
        n3 = n2;
        n2 = n1;
        n1 = curr + n3;
        return { value: curr, done: false };
      },

      return(v) {
        console.log("Sequence abandoned");
        return { value: v, done: true };
      }
    };
  }
};

for (var v of Skip) {
  console.log(v);
  if (v > 50) break;
}

var skippy = Skip[Symbol.iterator]();
var skipray = [];
for (var i = 0; i < 20; i++) {
  skipray.push(skippy.next().value);
}
console.log(skipray.join("-"));
