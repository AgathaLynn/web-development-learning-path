// create classes
class Recipe {
  constructor(ingredients, instructions) {
    this.ingredients = ingredients;
    this.instructions = instructions;
  }

  *getIngredients() {
    for (let ingredient of this.ingredients) {
      yield ingredient;
    }
  }

  *getInstructions() {
    for (let i = 0; i < this.instructions.length; i++) {
      yield (i + 1) + ". " + this.instructions[i];
    }
  }
}

class Groceries {
  constructor() {
    this.list = [];
  }

  addItem(item, amount) {
    item = item.toLowerCase();
    amount = parseInt(amount);

    if (item === "" || isNaN(amount)) {
      return;
    }

    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].item === item) {
        this.list[i].amount += amount;
        return this.list[i];
      }
    }
    this.list.push({item, amount});
    return {item, amount};
  }

  getList() {
    var lst = this.list.map(function(i) {
      return i.item + ": " + i.amount;
    });
    return lst.join("\n");
  }
}

// create recipes (instances of recipe class)
var salad = new Recipe(["lettuce", "carrots", "cucumber", "dressing"], ["Wash lettuce, carrots and cucumber.", "Slice carrots and cucumber", "Mix ingredients in a large bowl.", "Enjoy!"]);
var cake = new Recipe(["cake mix", "vegetable oil", "eggs", "water"], ["Follow directions on box."])

// create shopping list
var shoppingList = new Groceries();

// now lets fill our grocery list
function *makeGroceryList() {

  // ingredient iterators
  var it_s = salad.getIngredients();
  var it_s1 = salad.getIngredients();
  var it_c = cake.getIngredients();

  // here we go a-iterating
  for (let ingredient of it_s) {
    yield(ingredient);
  }
  for (let ingredient of it_s1) {
    yield(ingredient);
  }
  for (let ingredient of it_c) {
    yield(ingredient);
  }
}

// initialize functions
var it = makeGroceryList();
var grocery = it.next();
process.stdout.write(grocery.value + "? ");

// set up interaction through console
process.stdin.resume();
process.stdin.setEncoding("utf8");

// lets get started
process.stdin.on("data", function(text) {
  // if quantity isn't zero, try to add item to list
  if (parseInt(text) !== 0) {
    var result = shoppingList.addItem(grocery.value, text);
    if (result) {
      console.log("Item: " + result.item + "-> " + result.amount);
    }
    else {
      console.log("Item couldn't be added to list :-(\nTry again, or type '0'to continue to next ingredient.");
    }
  }

  if (parseInt(text) === 0 || result) {
    grocery = it.next();
    if (grocery.done) {
      console.log("\n" + shoppingList.getList());
      process.exit();
    }
    else {
      process.stdout.write(grocery.value + "? ");
    }
  }
});
