// passing values using "yield" and it.next()
var word_list = [
  {en: "yesterday", de: "gestern"},
  {en: "tomorrow", de: "morgen"},
  {en: "recently", de: "neulich"},
  {en: "daily", de: "täglich"},
  {en: "immediately", de: "sofort"}
];

function *quiz(list, from, to) {
  while (true) {
    let card = list[Math.floor(Math.random() * list.length)];
    let def = yield(card[from]);

    if (def.toLowerCase() === card[to]) {
      yield("Correct!\nHit enter to try another word.");
    }
    else {
      yield("Oops: The correct answer is " + card[to] + ".\nHit enter to try another word.");
    }
  }
}

var it = quiz(word_list, "de", "en");
console.log(it.next().value);

// getting input from the user
process.stdin.resume();
process.stdin.setEncoding("utf8");

// feed user input straight into generator function
process.stdin.on("data", function(text) {
  text = text.slice(0, text.indexOf("\\") - 1);
  if (text === "quit") {
    process.exit();
  }
  console.log(it.next(text).value);
});
