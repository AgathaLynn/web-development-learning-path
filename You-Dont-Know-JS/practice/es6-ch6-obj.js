/////
// Object.is()
/////

// I'm not sure when I'd actually do this... but here goes
var neg0 = -0;
var pos0 = +0;

console.log("comparing neg0 & pos0: " + Object.is(neg0, pos0));
console.log("comparing 1 - 1 with neg0: " + Object.is(1 - 1, neg0));
console.log("comparing -1 + 1 with neg0: " + Object.is(-1 + 1,neg0));
console.log("comparing 1 - 1 with pos0: " + Object.is(1 - 1, pos0));

/////
// Object.setPrototypeOf()
/////

var person = {
  introduce(name) {console.log(`Hi, my name is ${name}! Nice to meet you.`)},
};

var child = {
  stateAge(age) {console.log(`I am ${age} years old.`)}
};

// this doesn't work - child doesn't have introduce method
//child.introduce("Winston");
//child.stateAge(4);

// this should work as expected
Object.setPrototypeOf(child, person);
child.introduce("Winston");
child.stateAge(4);
