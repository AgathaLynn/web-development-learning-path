/*
Pair Programming with exsqzme
6/20/2017
Pig Latin Translator
*/

// check for arguments (if not, return usage statement)
var args = process.argv;
if (args.length < 3) {
  console.log("Usage: node [filename] [string]");
  process.exit(1);
}

var message = args.slice(2);
console.log(message.map(translateWord).join(" "));

// car -> arcay
// Car -> Arcay
// apple -> appleyay
// drum -> umdray
// McDonald -> OnaldmcDay

// because. => ecausebay.
// new-world => ewnay-orldway

function translateWord(s) {
  // handle hyphenated words
  if (s.indexOf("-") > -1) {
    return s.split("-").map(translateWord).join("-");
  }
  // handle trailing punctuation
  if (/[!?.;:,]/.test(s[s.length - 1])) {
    return translateWord(s.slice(0, s.length - 1)) + s[s.length - 1];
  }

  var vowelIndex = findFirstVowel(s);

  if (vowelIndex === -1) return s;
  if (vowelIndex === 0) return s + "yay";

  // we have a string that starts with a consonant
  if (s[0] === s[0].toUpperCase()) {
    s = s[0].toLowerCase() + s.slice(1, vowelIndex) + s[vowelIndex].toUpperCase() + s.slice(vowelIndex + 1);
  }
  return s.slice(vowelIndex) + s.slice(0, vowelIndex) + "ay";
}

function findFirstVowel(word) {
  var match = /[aeiou]/i.exec(word);
  if (match) {
    return match.index;
  }

  return -1;
}
