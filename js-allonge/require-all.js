// 'normal' version
const requireAll = (fn) =>
  (...args) => {
    if (args.length < fn.length) {
      throw 'Too few arguments provided!';
    }
    else {
      return fn(...args);
    }
  };

  function add2(x, y) {
    return x + y;
  }

  console.log(add2(3));
  console.log(requireAll(add2)(3));

// method version
const requireAll2 = (fn) =>
  function(...args) {
    if (args.length < fn.length) {
      throw 'Too few arguments provided!';
    }
    else {
      return fn.apply(this, args);
    }
  };
