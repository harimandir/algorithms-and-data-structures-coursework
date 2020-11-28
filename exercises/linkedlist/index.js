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
      next = node.next;
    if (next === null) {
      this.head = null;
    }
    while (next?.next) {
      node = next;
      next = node.next;
    }
    node.next = null;
  }

  insertLast(data) {
    const node = new Node(data);
    const tail = this.getLast();
    if (tail) {
      tail.next = node;
    } else {
      this.head = node;
    }
  }

  getAt(index) {
    let node = this.head,
      i = 0;
    while (i < index && node?.next) {
      node = node?.next ?? null;
      i++;
    }
    if (i !== index) {
      return null;
    }
    return node;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let prev = this.getAt(index - 1),
      node = prev?.next ?? null,
      next = node?.next ?? null;
    if (!node) {
      return;
    }
    prev.next = next;
  }
}

module.exports = { Node, LinkedList };
