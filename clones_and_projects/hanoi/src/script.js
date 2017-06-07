/////
// 'BUILDING BLOCK' COMPONENTS
/////

// tools for tracking the current game state
class Towers {
  constructor(size) {
    this.A = Array(size).fill(0).map((val, i) => i + 1);
    this.B = [];
    this.C = [];
    this.size = size;
  }
  move(from, to) {
    if (this[from].length > 0) {
      this[to].unshift(this[from].shift());
    }
  }
  columns() {
    return [this.A, this.B, this.C]; //.map(col => col.join(''));
  }
}

// tools for interacting with html
class Display {
  constructor(col1, col2, col3) {
    this.col1 = document.getElementById(col1);
    this.col2 = document.getElementById(col2);
    this.col3 = document.getElementById(col3);
  }
  render(col1, col2, col3) {
    this.col1.innerHTML = col1.map(this.buildRing).join('');
    this.col2.innerHTML = col2.map(this.buildRing).join('');
    this.col3.innerHTML = col3.map(this.buildRing).join('');
  }
  buildRing(value) {
    return "<div class='ring' id='ring-" + value + "'></div>";
  }
}

// generator function to solve towers of hanoi puzzle
function* solve(start, end, temp, count) {

  // if we're out of bounds or moving zero rings, just return
  if (count > 10 || count < 1) {
    return;
  }

  // move tower of height count - 1 to temp
  // move bottom ring to end
  // move tower of height count - 1 to end
  yield* solve(start, temp, end, count - 1);
  yield {from: start, to: end};
  yield* solve(temp, end, start, count - 1);
}

/////
// FUNCTION TO RUN ANIMATION (USES BUILDING BLOCKS)
/////

// function to run animation
function animate(col1, col2, col3, size, speed) {

  // create objects and iterator
  const towers = new Towers(size);
  const display = new Display(col1, col2, col3);
  const move = solve(col1, col2, col3, size);

  // show initial game state
  display.render(...towers.columns());

  // every second, make a move
  const game = setInterval(function() {
    const next = move.next();
    if (!next.done) {
      towers.move(next.value.from, next.value.to);
      display.render(...towers.columns());
    }
    else {
      // at game over, clear interval and show menu
      clearInterval(game);
      setTimeout(function() {
        document.getElementById('options').style.display = 'block';
      }, 1000);
    }
  }, speed);
}

/////
// EVENT LISTENERS
/////

// listener for count change (number of towers)
document.getElementById('count').addEventListener('input', function(e) {
  document.getElementById('count-value').innerHTML = e.target.value;
});

// listener for speed change (speed of animation)
document.getElementById('speed').addEventListener('input', function(e) {
  let value = 'slow';
  if (e.target.value > 2) {
    value = e.target.value < 6 ? 'med' : 'fast';
  }
  document.getElementById('speed-value').innerHTML = value;
});

// listener for form submit
document.getElementById('start').addEventListener('click', function() {
  const form = document.getElementById('options');

  const count = parseInt(form.elements.count.value);
  const speed = 1000 - (100 * parseInt(form.elements.speed.value));

  form.style.display = 'none';
  animate('A', 'B', 'C', count, speed);
});
