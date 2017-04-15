/////
// using Array.of()
/////

// subclass Array
class Costs extends Array {
  total() {
    return this.reduce(function(sum, curr) {
      return sum + curr;
    }, 0);
  }
  toFormatted(separator) {
    return this.map(curr => "$" + curr + ".00").join(separator);
  }
}

// try using constructor - array w/ 4 empty slots
var costs1 = new Costs(4);
console.log(costs1.toFormatted(" - "));

// try using array.of - one slot, value 4
var costs2 = Costs.of(4);
console.log(costs2.toFormatted(" - "));

// now just having fun
var expenses = Costs.of(2, 7, 1, 4, 25);
var total = expenses.total();
console.log( Costs.of(total).toFormatted() )

/////
// using Array.from()
/////

// making copies
var veggies = ["tomato", "potato", "grapefruit", "anchovy", "broccoli"];

var real_veggies = Array.from(veggies);
real_veggies.splice(2, 1);
real_veggies.push("zucchini");

console.log(veggies);
console.log(real_veggies);

// transforming iterables to arrays
var alphabet = "abcdefghijklmnopqrstuvwxyz";
console.log(Array.from(alphabet).join("-"));

var children = {
  length: 4,
  1: "Henry",
  2: "Jessie",
  3: "Violet",
  4: "Benny"
};

// won't work - Henry gets mapped to 1 & Benny is out of range
var offspring = Array.from(children);
console.log(offspring);

// instead, lets try this
var offsprung = Array.from(children, function(val, idx) {
  return children[Number(idx) + 1];
});
console.log(offsprung);

/////
// copyWithin, fill
/////

// let's become dwarves!!!
var array = ["ha", "he", "hi", "ho", "hu"];
console.log(Array.from(array).copyWithin(0, 2, 4).slice(0, -1));

// I love to laugh ha-ha-ha-ha
console.log(Array(4).fill(array[0]).join("-"));

/////
// finding stuff
/////

var foods = [
  { type: "apples", location: "counter" },
  { type: "bananas", location: "counter" },
  { type: "carrots", location: "fridge" },
  { type: "dates", location: "pantry" },
  { type: "eggplant", location: "fridge" },
  { type: "fries", location: "freezer" },
  { type: "ginger", location: "freezer" },
  { type: "hummus", location: "fridge" },
  { type: "ice", location: "freezer" }
];

// using find
if (foods.find(isFrozen)) {
  console.log("We need to fix the freezer, ASAP!!!");
}

if (foods.find(isBaking)) {
  console.log("Don't forget to turn off the oven!")
}

function isFrozen(food) {
  return food.location == "freezer";
}

function isBaking(food) {
  return food.location == "oven";
}

// using findIndex
var sorted = foods.sort(function(prev, curr) {
  return prev.location > curr.location;
})

console.log(`The first pantry item is found at \
index ${sorted.findIndex(item => item.location == "pantry")}`);

/////
// entries, values, keys
/////

var weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

console.log(...weekdays.keys());
console.log(...weekdays.entries());
// console.log(...weekdays.values()); not yet available in node.js
