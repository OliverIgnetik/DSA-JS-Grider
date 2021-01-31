// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data, children = []) {
    this.data = data;
    this.children = children;
  }
  add(data) {
    this.children.push(new Node(data));
    return this.children;
  }

  remove(data) {
    //  filter returns a new array
    this.children = this.children.filter((element) => element.data !== data);
    return this.children;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    if (!this.root) {
      return null;
    }
    const queue = [this.root];

    while (queue.length !== 0) {
      // pop
      let node = queue.shift();
      // do work
      fn(node);
      // process children
      queue.push(...node.children);
    }
  }
  traverseDF(fn) {
    if (!this.root) {
      return null;
    }
    const stack = [this.root];

    while (stack.length !== 0) {
      // pop
      let node = stack.pop();
      // do work
      fn(node);
      // process children
      // reverse the order so you get an effective preorder traversal
      stack.push(...node.children.reverse());
    }
  }
}

const letters = [];
const t = new Tree();
t.root = new Node('a');
t.root.add('b');
t.root.add('c');
t.root.children[0].add('d');
t.root.children[0].add('e');
t.root.children[1].add('f');
t.root.children[1].add('g');

t.traverseDF((node) => {
  letters.push(node.data);
});

module.exports = { Tree, Node };
