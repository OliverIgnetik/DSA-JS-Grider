// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  size() {
    return this.size;
  }
  clear() {
    this.head = null;
    this.size = 0;
    return;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let cur = this.head;
    while (cur.next !== null) {
      cur = cur.next;
    }
    return cur;
  }
  removeFirst() {
    const removed = this.head;
    this.head = removed.next;
    this.size--;
    return;
  }
  insertFirst(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.size++;
      return;
    } else {
      const ref = this.head;
      this.head = newNode;
      newNode.next = ref;
      this.size++;
      return;
    }
  }
  removeLast() {
    let cur = this.head;
    let prev = null;
    while (cur.next !== null) {
      let ref = cur.next;
      prev = cur;
      cur = ref;
    }
    prev.next = null;
    this.size--;
    return cur;
  }
  insertLast(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.size++;
      return;
    }
    let cur = this.head;
    while (cur.next !== null) {
      cur = cur.next;
    }
    cur.next = newNode;
    this.size++;
    return;
  }

  getAt(index) {
    let cur = this.head;
    let count = 0;
    while (count !== index) {
      cur = cur.next;
      count++;
    }
    return cur;
  }

  removeAt(index) {
    if (index === this.size - 1) {
      return this.removeLast();
    }
    if (index === 0) {
      return this.removeFirst();
    }
    const ref = this.getAt(index - 1);
    ref.next = ref.next.next;
    this.size--;
    return;
  }

  insertAt(index, data) {
    if (index === 0) {
      return this.insertFirst(data);
    }
    if (index === this.size - 1) {
      return this.insertLast(data);
    }
    const preceedingNode = this.getAt(index - 1);
    const newNode = new Node(data, preceedingNode.next);
    preceedingNode.next = newNode;
    this.size++;
    return newNode;
  }

  // for each
  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  // for of
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

const myList = new LinkedList();

myList.insertLast(3);
myList.insertLast(5);
myList.insertLast(1);
myList.insertLast(10);

console.log(myList.insertAt(1, 9));

module.exports = { Node, LinkedList };
