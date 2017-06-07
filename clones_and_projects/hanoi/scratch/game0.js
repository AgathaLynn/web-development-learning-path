// we have a (barely functional) towers of hanoi solution!
let A = [6, 5, 4, 3, 2, 1],
      B = [],
      C = [];

function solve(start, end, holding, count) {
  if (count === 1) {
    end.push(start.pop());
    print();
  }
  else {
    // move all but the bottom ring to holding
    solve(start, holding, end, --count);

    // move the bottom ring to the end
    end.push(start.pop());
    print();

    // move all the rings from holding to end
    solve(holding, end, start, count);
  }
}

function print() {
  console.log("A: " + A.join('-'));
  console.log('B: ' + B.join('-'));
  console.log("C: " + C.join('-'));
  console.log('\n');
}

print();
solve(A, B, C, A.length);
