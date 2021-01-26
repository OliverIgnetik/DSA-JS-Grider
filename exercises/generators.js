// Resources
// https://www.youtube.com/watch?v=EzdgkEMvrvA

// syntax for generators
function* gen() {
  const result = 1 + 1;
  return 20 + (yield result);
}

let generator = gen();
console.log('Basics of generators');
console.log(generator.next());
// result will be replaced with 10
console.log(generator.next(10));
console.log('====================================');

// Nested generators
function* moreNumbers() {
  yield 8;
  yield 9;
  yield 10;
}

function* numbers() {
  yield 1;
  yield 2;
  yield* moreNumbers();
  yield 4;
  yield 5;
}

generator = numbers();

// for (let i = 0; i < 10; i++) {
//   console.log(generator.next());
// }

// here is a more useful application of generators
// for of syntax is useful here
const my_list = [];
for (let value of generator) {
  my_list.push(value);
}

console.log('Nested generators');
console.log('my_list', my_list);
console.log('====================================');

// Tree example of using generators
class Tree {
  constructor(value = null, children = []) {
    this.value = value;
    this.children = children;
  }
  // DFS printing
  // This function will run until the next yield statement and then re-enter the for loop
  *printValues() {
    yield this.value;
    for (let child of this.children) {
      yield* child.printValues();
    }
  }
}

const tree = new Tree(1, [new Tree(2, [new Tree(4)]), new Tree(3)]);

const values = [];

for (let value of tree.printValues()) {
  values.push(value);
}

console.log('Tree traversal with generators');
console.log(values);

// squared numbers
function* squaredNumbers() {
  let n = 0;
  while (true) {
    n++;
    yield n * n;
  }
}
console.log('====================================');
console.log('Squared number generators');
const my_gen = squaredNumbers();

// print the first 10 numbers in the sequence
for (let i = 0; i < 5; i++) {
  console.log(my_gen.next());
}

// unique random names generator
function* createUniqueRandomGenerator(array) {
  const available = array;
  while (available.length !== 0) {
    // gets a random index
    // Math.random() returns a number between 0 and 1
    const randomIndex = Math.floor(Math.random() * available.length);
    const value = available[randomIndex];
    available.splice(randomIndex, 1);
    yield value;
  }
}
const names = ['Dom', 'Shelly', 'Timmy', 'Marie'];

const uniqueNames = createUniqueRandomGenerator(names);

console.log('====================================');
console.log('Some random names');
for (let name of uniqueNames) {
  console.log(name);
}
