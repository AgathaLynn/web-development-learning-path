// I'm copying array and top to the 'this' object.
// The 'this' object is what's returned when I use the new keyword.
const Stack = function() {
  Object.assign(this, {
    array: [],
    top: -1
  });
};

// Now I'm assigning my stack functions to the prototype for 'Stack'.
// Every object that I instantiate with Stack can access these functions.
Object.assign(Stack.prototype, {
  push(value) {
    return this.array[this.top += 1] = value;
  },
  pop() {
    let value;

    if (!this.isEmpty()) {
      value = this.array[this.top];
      this.array[this.top] = void 0;
      this.top -= 1;
      return value;
    }
  },
  isEmpty() {
    return this.top < 0;
  }
});

const pets = new Stack();
console.log(pets);
console.log(pets.push('Gremlin'));
console.log(pets.push('Harry'));
console.log(pets.isEmpty());
console.log(pets.pop());
console.log(pets);
console.log(pets.pop());
console.log(pets.isEmpty());
console.log(pets);
console.log(pets.pop());
console.log(pets.isEmpty());
console.log(pets.push('Chance'));
console.log(pets);
