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
  left = null;
  right = null;

  constructor(data) {
    this.data = data;
  }

  insert(data) {
    const next = data < this.data ? this.left : this.right;
    if (next === null) {
      this[data < this.data ? "left" : "right"] = new Node(data);
      return;
    }
    next.insert(data);
  }

  contains(data) {
    if (this.data === data) {
      return this;
    }
    const next = data < this.data ? this.left : this.right;
    return next?.contains(data) ?? null;
  }
}

module.exports = Node;
