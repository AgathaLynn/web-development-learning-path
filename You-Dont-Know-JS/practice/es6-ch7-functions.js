// function names

function buildAdder(x) {
  return function(y) {
    return x + y;
  };
}

var plusThree = buildAdder(3);
var buildSummerUpper = buildAdder;

console.log("plusThree(4):");
console.log(plusThree(4)); // 7

console.log("plusThree.name:");
console.log(plusThree.name); // ""

console.log("buildAdder(3).name:");
console.log(buildAdder(3).name); // ""

console.log("buildAdder.name:");
console.log(buildAdder.name); // buildAdder

console.log("buildSummerUpper.name:");
console.log(buildSummerUpper.name); // buildAdder

// not writable, but configurable

var minusSeven = buildAdder(-7);

minusSeven.name = "minusSeven";
console.log("minusSeven.name: " + minusSeven.name); // still ""

Object.defineProperty(minusSeven, "name", {value: "minusSeven"});
console.log("minusSeven.name: " + minusSeven.name); // works!!!
