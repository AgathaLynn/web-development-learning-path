// simple set
var books = new Set([
  "To Kill a Mockingbird",
  "Death Comes for the Archbishop",
  "As I Lay Dying"
]);

books.add("For Whom the Bell Tolls");
books.add("Inkdeath");

console.log(books.size); // I'm expecting 5
console.log(books.has("Winnie the Pooh")); // I'm expecting false
console.log(books.has("As I Lay Dying")); // I'm expecting true

books.delete("For Whom the Bell Tolls");
console.log(books.size); // Should be 4 now

// I can use a generator to populate a set
function *getPets() {
  var pets = ["cat", "dog", "bird", "bunny", "hermit crab", "lizard", "rock"];
  for (var pet of pets) {
    yield pet;
  }
}

var pets = new Set(getPets());

console.log(pets.size);
console.log("Cats included? " + pets.has("cat"));
console.log("How about rocks? " + pets.has("rock"));
pets.delete("rock");
console.log("Who wants a pet rock?! Gone now: " + pets.has("rock"));
console.log("Do we have goldfish? " + pets.has("goldfish"));
pets.add("goldfish");
console.log("That's a travesty. Added: " + pets.has("goldfish"));

// now let's create a set of vocabulary words
var words = {
  vagary: "an unpredictable or erratic action, occurence, course, or instance",
  theodolite: "a precision instrument having telescopic sight for establishing horizontal and sometimes vertical angles",
  clepsydra: "an ancient device for measuring time by the regulated flow of water or mercury through a small aperture",
  epicycle: "a small circle the center of which moves around in the circumference of a larger circle"
};

var vocab = new Set(Object.keys(words));

// and recovering those words?
console.log(...vocab.keys()); // as separate args
console.log([...vocab.keys()]); // as an array

console.log(...vocab); // more simply
console.log([...vocab]); // again
