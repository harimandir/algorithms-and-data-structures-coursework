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
  head = null;

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let i = 0,
      node = this.head;
    while (node) {
      i++;
      node = node.next;
    }
    return i;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    while (node?.next) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head?.next ?? null;
  }

  removeLast() {
    if (this.head === null) {
      return;
    }
    let node = this.head,
      next = this.head.next;
    if (next === null) {
      this.head = null;
    }
    while (next?.next) {
      node = next;
      next = node.next;
    }
    node.next = null;
  }
}

module.exports = { Node, LinkedList };
