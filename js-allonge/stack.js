// I've got the stack example in front of me
// Let's walk through making a Queue

const Queue = () => {
  const array = [];
  let index = -1;

  return {
    enqueue (value) {
      return array[index += 1] = value;
    },
    dequeue () {
      const value = array[0];

      if (index >= 0) {
        for (let i = 0; i <= index; i++) {
          array[i] = array[i + 1];
        }
        index -= 1;
      }

      return value;
    },
    isEmpty() {
      return index < 0;
    }
  };
};

// testing
const pets = Queue();

console.log(pets.enqueue("Jeffrey"));
console.log(pets.enqueue("Gremlin"));
console.log(pets.isEmpty());
console.log(pets.dequeue());
console.log(pets.isEmpty());
console.log(pets.dequeue());
console.log(pets.isEmpty());
console.log(pets.dequeue());
console.log(pets.isEmpty());
