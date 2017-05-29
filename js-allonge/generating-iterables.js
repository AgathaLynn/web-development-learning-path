// my versions

const Fibonacci = {
  *[Symbol.iterator]() {
    let a = 0, b = 1;
    yield a;
    yield b;

    while (true) {
      [a, b] = [b, a + b];
      yield b;
    }
  }
}

for (let n of Fibonacci) {
  if (n > 50) {
    break;
  }
  console.log(n);
}

function * mapWith (fn, iterable) {
  for (let item of iterable) {
    yield fn(item);
  }
}

function * filterWith (fn, iterable) {
  for (const item of iterable) {
    if (fn(item)) {
      yield item;
    }
  }
}

function * untilWith (fn, iterable) {
  for (const element of iterable) {
    if (fn(element)) {
      return;
    }
    else {
      yield element;
    }
  }
}
