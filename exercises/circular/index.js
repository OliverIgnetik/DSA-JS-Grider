// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

const ll = require('./linkedlist');

const { LinkedList, Node } = ll;

function circular(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();
  while (true) {
    // checks for edge cases
    if (!fast.next || !fast.next.next) return false;
    // iterate before checking
    slow = slow.next;
    fast = fast.next.next;
    // after iteration check condition
    if (slow === fast) return true;
  }
}

module.exports = circular;
