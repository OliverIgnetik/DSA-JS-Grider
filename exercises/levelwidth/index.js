// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

const Node = require('./node');

function levelWidth_alt(root) {
  const arr = [root, 's'];
  const counters = [0];

  while (arr.length > 1) {
    const node = arr.shift();

    if (node === 's') {
      counters.push(0);
      arr.push('s');
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }

  return counters;
}

function levelWidth(root) {
  const level_widths = [];
  const queue = [root];

  let next_level_counter = 0;
  let extractions = 0;
  let current_level_counter = 1;

  while (queue.length !== 0) {
    // extract node
    let node = queue.shift();
    extractions++;
    // process children
    queue.push(...node.children);
    // count number of children
    next_level_counter += [...node.children].length;

    if (extractions === current_level_counter) {
      current_level_counter = next_level_counter;
      level_widths.push(extractions);
      extractions = 0;
      next_level_counter = 0;
    }
  }
  return level_widths;
}

const root = new Node('a');
root.add('b');
root.add('c');
root.add('d');
root.children[0].add('e');
root.children[0].add('f');
root.children[1].add('g');
root.children[1].add('h');
root.children[1].add('i');
root.children[2].add('j');

console.log(levelWidth(root));

module.exports = levelWidth;
