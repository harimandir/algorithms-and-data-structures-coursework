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
}

module.exports = { Node, LinkedList };
