// "interpolated string literals"
var students = [
  {
    name: "Ella",
    dob: "3/3/1998"
  },
  {
    name: "Wanda",
    dob: "6/23/1999"
  },
  {
    name: "Miranda",
    dob: "10/10/1998"
  }
];

function introduce(student) {
  return `Hi! My name is ${student.name} and my birthday is ${student.dob}.`;
}

for (var i = 0; i < students.length; i++) {
  console.log(introduce(students[i]));
}

// multiple lines
var birthday_girl = "Josie";
var lyrics = `Happy Birthday to you!
Happy Birthday to you!
Happy Birthday, dear ${birthday_girl}!
Happy Birthday to you!`;

console.log(lyrics);

// tagged template literals
var date = new Date();
var hour = date.getHours();
var minutes = date.getMinutes();

function formatDate(strs, hour, minutes) {
  return strs[0] + (hour > 12 ? hour - 12 : hour) + strs[1] + minutes + strs[2];
}

var statement1 = formatDate
`It's currently ${hour}:${minutes}!`;

var statement2 = formatDate
`It's already after ${hour}! Oh, no!
I have to leave in ${60 - minutes} minutes!`;

console.log(statement1);
console.log(statement2);
