/////
// repeat (you do not know how happy this makes me)
/////

console.log("ha".repeat(4));

var words = ["happy", "birthday"];
words[0] = (words[0] + " ").repeat(3);
console.log(words.join("") + "!");

/////
// looking for stuff
/////

var colors = "redyellowgreenandblueshinyorangeandpurpletoo";

console.log(colors.startsWith("Red"));
console.log(colors.includes("orange"));
console.log(colors.endsWith("rainbow"));
