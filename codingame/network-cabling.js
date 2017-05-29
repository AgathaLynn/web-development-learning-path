/*
  SOLUTION #1

  This passes tests, but I'd like to see some sort of proof that any local minimum will also be an absolute minimum.
  It's been way too long since I've tried to do Math-y stuff!

  Nevermind - I'm comfortable with this. Basically (no real math!) all the absolute value functions will open upwards - since they're absolute value functions.
  So I'm always going to end up with something shaped like a V or U, which means I'll end up with either a flat bottom or a pointed bottom. And my solution accounts for both.


  Other ways I've tried:
  * Systematically search space between lowest building and highest building works well when the buildings are fairly close together.
  * Using critical points (comparing lengths when main cable is placed even with each building) works well when there aren't too many buildings.
*/

// build an array of buildings
var N = parseInt(readline());

var buildings = []; // we just need y-coordinates
var leftmost = Infinity;
var rightmost = -Infinity;

for (let i = 0; i < N; i++) {
    let [x, y] = readline().split(' ').map(Number);
    buildings.push(y);
    leftmost = Math.min(leftmost, x);
    rightmost = Math.max(rightmost, x);
}

// calculate the length of the main cable
var main = rightmost - leftmost;

// get bounds for y-coordinate of cable
var max = Math.max.apply(this, buildings);
var min = Math.min.apply(this, buildings);

// use a modified binary search algorithm to find minimum
while (max !== min) {

    // two points so we can determine whether minimum is to left or right
    let guess = calculateLength(Math.floor((max + min) / 2));
    let next = calculateLength(Math.floor((max + min) / 2) + 1);

    if (guess === next) {
        max = Math.floor((max + min) / 2);
        min = Math.floor((max + min) / 2);
    }
    if (guess > next) {
        min = Math.min(Math.floor((max + min) / 2) + 1, max);
    }
    if (guess < next) {
        max = Math.max(Math.floor((max + min) / 2), min);
    }
}

print(calculateLength(max) + main);

// function to calculate length of cable at given y-coordinate
function calculateLength(y) {
    return buildings.reduce(function(sum, building) {
        return sum + Math.abs(building - y);
    }, 0);
}
