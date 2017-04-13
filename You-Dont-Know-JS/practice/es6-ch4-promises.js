// Using promises to get and print a user's name
var name = new Promise(function(resolve, reject) {

  // prompt user for input
  process.stdin.resume();
  process.stdin.setEncoding("utf8");

  process.stdout.write("Name: ");
  process.stdin.on("data", function(text) {
    text = text.toString().trim().split(" ");
    if (text.length >= 2) {
      resolve({
        first: text[0],
        last: text[text.length - 1]
      });
    }
    else {
      reject("You didn't provide a first and last name.");
    }
  });
});

name
.then(
  function fulfilled(contents) {
    console.log("Welcome, " + contents.first + " " + contents.last + "!");
    console.log("Is it okay if I call you " + contents.first + "?");
    process.exit();
  },
  function rejected(reason) {
    console.log(reason);
    process.exit();
  }
);
