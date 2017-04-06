
// using spread operator to flatten arrays
var cats = ["Jeffrey", "Gremlin"];
var dogs = ["Murphy"];
var birds = ["Chance"];

var pets = [...cats, ...dogs, ...birds];

for (var i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

// using spread operator to "gather" arguments
function print(...args) {
  for (var i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

print("L", "O", "V", "E", "L", "Y");
print("I never saw a purple cow", "I never hope to see one",
      "But I can tell you anyhow", "I'd rather see than be one");

// being silly now - gathering arguments, then immediately spreading them
function prepareFunction(func, the_this, ...args) {
  return func.bind(the_this, ...args);
}

function adder(...numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
console.log(adder(1,2,3,4,5));

var sum_1989 = prepareFunction(adder, null, 1, 9, 8, 9);
console.log(sum_1989());
