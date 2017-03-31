
// try-catch block inside of iterator
function* getNames() {
  var names = ["ashley", "barnabas", "clyde", "doris", 12, "elijah"];

  for (var i = 0; i < names.length; i++) {
    yield names[i];
  }
}

for (var name of getNames()) {
  try {
    console.log(name[0].toUpperCase() + name.slice(1));
  }
  catch(err) {
    console.log("---error---");
  }
}


// try passing an error from a generator to an iterator
var pets = [
  {"name": "Murphy", "species": "dog"},
  {"name": "Jeffrey", "species": "cat"}
];

function getCat(cat) {
  setTimeout(function() {
    if (cat.species === "cat") {
      it.next(cat.name);
    }
    else {
      it.throw("ERROR: " + cat.name + " is not a cat, but rather a " + cat.species + "!");
    }
  }, 500);
};

function* printCat() {
  try {
    var cat = yield getCat(pets[1]);
    console.log(cat + " is a cat!");
  }
  catch (err) {
    console.log(err);
  }
}

var it = printCat();
it.next();
