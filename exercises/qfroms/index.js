// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.in = new Stack();
    this.out = new Stack();
  }

  add(element) {
    this.in.push(element);
  }

  remove() {
    if (!this.out.peek()) {
      while (this.in.peek()) {
        this.out.push(this.in.pop());
      }
      return this.out.pop();
    } else {
      return this.out.pop();
    }
  }

  peek() {
    if (!this.out.peek()) {
      while (this.in.peek()) {
        this.out.push(this.in.pop());
      }
      return this.out.peek();
    } else {
      return this.out.peek();
    }
  }
}

module.exports = Queue;
