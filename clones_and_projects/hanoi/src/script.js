// tools for modeling the towers as an array
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

function start(col1, col2, col3, size) {

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
      clearInterval(game);
    }
  }, 600);
}

// start animation
start('A', 'B', 'C', 10);
