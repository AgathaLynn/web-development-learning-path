// a 'green' maybe
const maybe = (fn) =>
  function(...args) {
    for (let arg of args) {
      if (arg == null) return arg;
    }
    return fn.call(this, ...args);
  };

// a 'green' compose
const compose = (a, b) => {
  return function(x) {
    a.call(this, b.call(this, x));
  };
};

class Pair {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

Pair.prototype.setX = function(val) {
  return this.x = val;
};

Pair.prototype.setY = function(val) {
  return this.y = val;
};

Pair.prototype.setEqual = compose(Pair.prototype.setX, Pair.prototype.setY);

const origin = new Pair(0, 0);
origin.setEqual(3);
origin.setEqual(-45);
console.log(origin);
