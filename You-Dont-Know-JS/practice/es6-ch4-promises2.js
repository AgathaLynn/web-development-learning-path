// chaining promises, using promise.all
var name = Promise.resolve({})
.then(
  function fulfilled(data) {
    return Promise.all([data, getInput("First Name", data, "first")]);
  }
)
.then(
  function fulfilled(data) {
    data = data[0];
    return Promise.all([data, getInput("Last Name", data, "last")]);
  }
)
.then(
  function fulfilled(data) {
    name = data[0];
    console.log("Hi, " + name.first + " " + name.last);
  },
  function rejected(reason) {
    console.log("Oops: " + reason);
  }
);


function getInput(prompt, struct, prop) {
  return new Promise(function pr(resolve, reject) {
    process.stdin.resume();
    process.stdin.setEncoding("utf8");

    process.stdout.write(prompt + ": ");
    process.stdin.once("data", function(data) {
      process.stdin.pause();
      data = data.toString().trim();

      if (data && data.length > 0) {
        struct[prop] = data;
        resolve();
      }
      else {
        reject("getInput (" + prompt + ") failed");
      }
    });
  });
}
