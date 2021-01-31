// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

const Node = require('./node');

function validate(node, min = null, max = null) {
  // base case
  if (!node) return true;
  // current node
  let cur_check;
  if (min && max) {
    if (node.data > min && node.data < max) cur_check = true;
    else cur_check = false;
  } else {
    // left
    if (!min && max) {
      if (node.data < max) cur_check = true;
      else cur_check = false;
      // right
    } else if (min && !max) {
      if (node.data > min) cur_check = true;
      else cur_check = false;
      // root node
    } else cur_check = true;
  }

  // left subtree
  let left_check = validate(node.left, min, node.data);
  //  right subtree
  let right_check = validate(node.right, node.data, max);
  // policy
  return cur_check && left_check && right_check;
}

// const bst = new Node(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(1);
// bst.insert(7);
// bst.insert(12);
// bst.insert(19);

// console.log(bst);

// console.log(validate(bst));
module.exports = validate;
