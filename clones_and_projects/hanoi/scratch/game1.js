// Now let's generate instructions
const towers = [
  {name: 'A', height: 7},
  {name: 'B', height: 0},
  {name: 'C', height: 0}
];

function* solve(start, end, temp, count) {

  // if count not provided, assume we want to move ALL the rings
  count = count || start.height;

  // sanity check - if I can't safely move, then just return
  if (count > start.height || count < 1) {
    return;
  }

  // start moving stuff!
  if (count === 1) {
    end.height++;
    start.height--;
    yield {from: start, to: end};
  }
  else {
    // move all but the bottom ring to temp
    yield* solve(start, temp, end, --count);

    // move the bottom ring to end
    end.height++;
    start.height--;
    yield {from: start, to: end};

    // move rings from temp to end
    yield* solve(temp, end, start, count);
  }
}

// testing
for (let step of solve(...towers)) {
  console.log(step.from.name + " -> " + step.to.name);
}
