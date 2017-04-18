// Symbol.iterator
// lets give this array an iterator that goes BACKWARDS
var arr = [1,2,3,4,5,6,7];
for (var val of arr) {
  console.log(val);
}

arr[Symbol.iterator] = function*() {
  var i = arr.length - 1;
  do {
    yield arr[i];
    i -= 1;
  }
  while (i >= 0);
};

for (var val of arr) {
  console.log(val);
}

// Symbol.species
class Ints extends Array {
  constructor(...vals) {
    if (vals.every(x => Number.isInteger(x))) {
      super(...vals);
    }
    else {
      throw "ERROR: Ints Only!";
    }
  }
  double() {
    return new Ints(...this.map(x => x * 2));
  }
  triple() {
    for (var i = 0; i < this.length; i++) {
      this[i] = this[i] * 3;
    }
  }
  half() {
    return this.map(x => x / 2);
  }
  static get [Symbol.species]() { return Array; }
}

// create instance of Ints
var ints = new Ints(1, 2, 3);
console.log(ints);
for (var int of ints) {
  console.log(int);
}

// return array by default
var halves = ints.half();
console.log(halves);
console.log(halves instanceof Ints);
console.log(halves instanceof Array);

// but here I return an Ints instance (copy)
var doubles = ints.double();
console.log(doubles);
console.log(doubles instanceof Ints);
console.log(doubles instanceof Array);

// and here I modify in place
var triples = ints.triple();
console.log("triples: " + triples); // should be undefined
console.log("ints: " + ints); // should be triples
console.log(ints instanceof Ints);
console.log(ints instanceof Array);
