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
    this.insertAt(data, 0);
  }

  insertAt(data, index) {
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    let prev = this.getAt(index - 1) ?? this.getLast();
    if (!prev) {
      this.head = new Node(data);
      return;
    }
    prev.next = new Node(data, prev.next);
  }

  insertLast(data) {
    this.insertAt(data, this.size());
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
    return this.getAt(0);
  }

  getAt(index) {
    let node = this.head,
      i = 0;
    while (i < index && node?.next) {
      node = node?.next ?? null;
      i++;
    }
    return i === index ? node : null;
  }

  getLast() {
    return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.removeAt(0);
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let prev = this.getAt(index - 1);
    if (prev) {
      prev.next = prev.next?.next ?? null;
    }
  }

  removeLast() {
    this.removeAt(this.size() - 1);
  }

  forEach(fn) {
    let node = this.head;
    let i = 0;
    while (node) {
      fn(node, i++);
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
