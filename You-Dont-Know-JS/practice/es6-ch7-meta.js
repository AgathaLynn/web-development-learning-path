// meta properties
class Pet {
  constructor(name, species) {
    this.name = name;
    this.species = species;

    if (new.target.name === "Pet") {
      console.log("Generic pet of species " + species + " created!");
    }
    else {
      console.log("New " + new.target.name + " created!");
    }
  }
}

class Dog extends Pet {
  constructor(name, speech) {
    super(name, "dog");
    this.speech = speech;
  }

  speak() {
    console.log(this.name + " says: " + this.speech + "!");
  }
}

var chance = new Pet("Chance", "Bird");
var murphy = new Dog("Murphy", "Woo-woo");
murphy.speak();
