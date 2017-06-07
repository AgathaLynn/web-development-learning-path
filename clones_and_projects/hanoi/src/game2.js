// instructions sans actual towers
function* solve(start, end, temp, count) {

  // if we're out of bounds or moving zero rings, just return
  if (count > 10 || count < 1) {
    return;
  }

  // move all but the bottom ring to temp
  yield* solve(start, temp, end, count - 1);

  // move the bottom ring to end
  yield {from: start, to: end};

  // move remaining rings from temp to end
  yield* solve(temp, end, start, count - 1);

}

/*
// testing
for (let step of solve('a', 'b', 'c', 7)) {
  console.log(step.from + " -> " + step.to);
}
*/
