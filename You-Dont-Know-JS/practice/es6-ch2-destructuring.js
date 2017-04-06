// Playing with destructuring
var today = {
  "day": 4,
  "date": 6,
  "month": 4,
  "year": 2017
};

var {"date": date, "month": month, "year": year} = today;

function format_date(day, month, year) {
  return month + "/" + day + "/" + year;
}
console.log("Today is " + format_date(date, month, year));


// changing "today" doesn't change global date
function next_day(obj) {
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  obj.day = (obj.day + 1) % 7;
  obj.date += 1;
}

// converting an object into an array
var quote = {
  text: "Shan't say nothing if you don't say please!",
  author: "Peeves the Poltergeist"
};
var quote_array = [];

({text: quote_array[0], author: quote_array[1]} = quote);
console.log(quote_array[1] + " said: " + quote_array[0]);

next_day(today);
console.log("Today is " + format_date(today.date, today.month, today.year));
console.log("Today is " + format_date(date, month, year));

// messing around with family
var family = {
  sister: "Amanda",
  brothers: ["Patrick", "Anthony"],
  mom: "Donna",
  dad: "David"
};

// create an array of siblings
var siblings_arr = [];
({brothers: [siblings_arr[0], siblings_arr[1]], sister: siblings_arr[2]} = family);

for (var i = 0; i < siblings_arr.length; i++) {
  console.log(siblings_arr[i]);
}

// create an object of siblings (yes, there is an easier way - that's not the point)
var siblings_obj = {};
[siblings_obj.sister, ...siblings_obj.brothers] = siblings_arr.reverse();

console.log(siblings_obj.sister);
console.log(siblings_obj.brothers);

// with function parameters
var alice = {
  name: "Alice",
  address: ["1 Hurst Street", "Huckleberry, WA"]
};

var alma = {
  name: "Alma",
  address: ["452 Wilberton Way", "Washington, WI"]
};

var draft = [
  "I am so sorry to hear about what happened to Tyko.",
  "Who would ever have thought that such a thing was ",
  "possible? I know that fish like water, but so do I.",
  "I mean, it's not like they need that water to breathe ",
  "or anything, right?!",
  "Anyway, I just wanted to let you know that I am thinking ",
  "about you, and about your poor little goldfish."
];

function createNote({name: sender} = from, {name: recipient, address} = to, text) {
  var envelope = [recipient, ...address];

  var greeting = "Dear " + recipient + ",";
  var closing = ["Love, ", sender];
  var note = [greeting, ...text, ...closing];

  return [envelope, note];
}

function printNote([envelope, note]) {
  for (var i = 0; i < envelope.length; i++) {
    console.log(envelope[i]);
  }
  console.log("");
  for (var j = 0; j < note.length; j++) {
    console.log(note[j]);
  }
}

var note = createNote(alma, alice, draft);
printNote(note);

// another example, with default parameters
function scoreSymptoms(headache, nausea, cough, fatigue, ...others) {
  var symptoms = {headache, nausea, cough, fatigue};
  for (var item in others) {
    symptoms[item] = others[item];
  }
  return symptoms;
}

function createEntry({headache, fatigue, dizziness = 0} = {}, food) {
  console.log("Symptoms after eating " + food + ":");
  console.log("headache: " + headache);
  console.log("fatigue: " + fatigue);
  console.log("dizziness: " + dizziness);
}

var symptoms = scoreSymptoms(4, 2, 6, 2, {"dizziness": 4, "pain": 7});
createEntry(symptoms, "anchovies");
