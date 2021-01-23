// best place to practice regex
// https://regex101.com/
// https://www.youtube.com/watch?v=909NfO1St0A

let string = 'all your base are belong to us';
// /regex/ syntax
let regex = /base/;
let result = regex.test(string);
console.log(result);

// ^ and $
regex = /^all/;
console.log(regex.test(string));

regex = /us$/;
console.log(regex.test(string));

// character classes
// [a-zA-Z0-9] is a large character classes

// + 1 or more
// * 0 or more
string = 'my name is olli and my age is 1999';
regex = /name is [a-zA-Z0-9]+/;
console.log(regex.test(string));

// ? optional
let string1 = 'my name is olli and my age is 19';
let string2 = 'my name is olli';
regex = /name is [a-zA-Z0-9]{4}([a-z]*)?/;
console.log(regex.test(string1), regex.test(string2));

// here are some other operators, they are universal
// /w
// /d
// /s
// /n
// /t

// groupings
string = 'my name is olli';
regex = /name is ([a-z]*)/;
let match = regex.exec(string);
if (match) {
  console.log(match[1]);
} else {
  console.log('no name');
}

// example application
string = 'filea.mp3 file_01.mp3 file_02.mp3 test.csv other.txt';
regex = /(\w+)\.mp3/g;
match = regex.exec(string);
while (match) {
  let filename = match[1];
  console.log(filename);
  // keeps traversing the string
  match = regex.exec(string);
}
