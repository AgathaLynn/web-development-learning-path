// first version - sets this
const once = (fn) => {
  let called = false;

  return function(...args) {
    if (called) {
      return;
    }
    else {
      called = true;
      return fn.apply(this, args);
    }
  };
};

// this version works as expected...
// but I'm not sure how much memory it uses?

// SWEET!!! THIS IS MOSTLY WHAT THE BOOK DOES!
// (They use WeakSets - which helps with the memory issue, and holds objects only)
// And fixes to make it work on non-methods
const methodOnce = (fn) => {
  const called = new Set();

  return function(...args) {
    if (called.has(this)) {
      return;
    }
    else {
      called.add(this);
      return fn.apply(this, args);
    }
  };
};

// person class
class Person {
  setName(first, last) {
    this.name = {first, last};
    return this;
  }
  fullName() {
    return this.name.first + " " + this.name.last;
  }
}

// setName can now be applied only once
Object.defineProperty(Person.prototype, 'setName', {
  value: methodOnce(Person.prototype.setName)
});

// first naming sticks, second doesn't
const henry = new Person().setName('Henry', 'Alden');
console.log(henry.fullName());

henry.setName('Joe', 'Schmidt');
console.log(henry.fullName());

// BUT... Now I can't name Jessie!
const jessie = new Person().setName('Jessie', 'Alden');
console.log(jessie.fullName());
