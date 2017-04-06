// using "let" for block scoping

function print(str, times) {
  var result = "";
  for (var i = 0; i < times; i++) {
    result += str;
  }
  console.log(result);
}

let funcs = [];
for (let i = 0; i < 6; i++) {
  funcs.push(function(str) {
    print(str, i);
  });
}

funcs[2]("hello? ");
