// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  insert(data) {
    const newNode = new Node(data, null, null);
    let cur = this;
    while (true)
      if (data < cur.data) {
        if (cur.left === null || cur.left === undefined) {
          cur.left = newNode;
          return newNode;
        } else cur = cur.left;
      } else if (data > cur.data) {
        if (cur.right === null || cur.right === undefined) {
          cur.right = newNode;
          return newNode;
        } else cur = cur.right;
      } else {
        return cur;
      }
  }

  contains(data) {
    let cur = this;
    while (true) {
      if (data < cur.data) {
        if (cur.left === null || cur.left === undefined) return null;
        else cur = cur.left;
      } else if (data > cur.data) {
        if (cur.right === null || cur.right === undefined) return null;
        else cur = cur.right;
      } else {
        return cur;
      }
    }
  }
}

const BST = new Node(5, null, null);
BST.insert(3);
BST.insert(8);
BST.insert(1);
BST.insert(9);

module.exports = Node;
