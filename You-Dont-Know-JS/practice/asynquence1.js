// countdown with asynquence library (promise practice)

var ASQ = require("asynquence");

var countdown = new Promise(function(resolve, reject) {
  console.log("Starting library-free version:");
  var number = 5;
  var countdown = setInterval(function() {
    if (number) {
      console.log(number);
      number--;
    }
    else {
      clearInterval(countdown);
      resolve(number);
    }
  }, 1000);
});

countdown.then(
  function() {
    console.log("TOO LATE!");
  }
)
.then(function() {
  console.log("Starting version that uses asynquence library");
})
.then (
  function() {
    ASQ(
      function(count) {
        count(5);
      },
      function(done, number) {
        var countdown = setInterval(function() {
          if (number) {
            console.log(number);
            number--;
          }
          else {
            clearInterval(countdown);
            done();
          }
        }, 1000);
      }
    )

    .then(function(done) {
      console.log("TOO LATE!");
    });
  }
);
