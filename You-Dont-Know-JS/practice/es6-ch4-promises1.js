// chaining promises
var numbers = {
  "one": 1,
  "two": 2,
  "three": 3,
  "four": 4,
  "five": 5,
  "six": 6,
  "seven": 7,
  "eight": 8,
  "nine": 9,
  "zero": 0
};

function prompt() {
  return new Promise(function pr(resolve, reject) {
    process.stdin.resume();
    process.stdin.setEncoding("utf8");

    process.stdout.write("Digit: ");
    process.stdin.on("data", function(data) {
      process.stdin.pause();
      data = data.toString().trim();
      if (numbers[data] !== undefined) {
        resolve(numbers[data]);
      }
      else {
        reject("Invalid input");
      }
    });
  });
}

var number = prompt()
.then(
  function fulfilled(value) {
    console.log(value);
    return value;
  },
  function rejected(reason) {
    console.log(reason);
  }
)
.then(
  function fulfilled(value) {
    for (var i = 0; i < value; i++) {
      console.log("Hooray!");
    }
  }
);
