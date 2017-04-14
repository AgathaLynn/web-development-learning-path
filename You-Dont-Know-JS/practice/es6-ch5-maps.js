// storing descriptions in a map
function add(x, y) {
  return x + y;
}

function printCat() {
  console.log("cat");
}

var people = ["Jordan", "Alma", "Antonio"];

var about = new Map();
about.set(add, "function that adds two numbers");
about.set(printCat, "function that logs the word 'cat' to the console");
about.set(people, "array storing some names");

// accessing values from map
console.log(about.get(add));

var arr = [...about.entries()];
console.log(arr[1][0].name + ": " + arr[1][1]);

console.log("If the key is a function, I can call it!");
console.log("arr[0][0](23, 27): " + arr[0][0](23, 27));
