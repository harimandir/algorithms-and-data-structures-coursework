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

const Stack = require("./stack");

class Queue {
  stack = new Stack();
  stash = new Stack();

  add(element) {
    this.stack.push(element);
  }

  remove() {
    this._switchStacks(this.stack, this.stash);
    let element = this.stash.pop();
    this._switchStacks(this.stash, this.stack);
    return element;
  }

  _switchStacks(from, to) {
    while (from.peek() !== undefined) {
      to.push(from.pop());
    }
  }

  peek() {
    this._switchStacks(this.stack, this.stash);
    let element = this.stash.peek();
    this._switchStacks(this.stash, this.stack);
    return element;
  }
}

class QueueFromStacksOnAdd {
  stack = new Stack();
  stash = new Stack();

  add(element) {
    while (this.stack.peek() !== undefined) {
      this.stash.push(this.stack.pop());
    }
    this.stack.push(element);
    while (this.stash.peek() !== undefined) {
      this.stack.push(this.stash.pop());
    }
  }

  remove() {
    return this.stack.pop();
  }

  peek() {
    return this.stack.peek();
  }
}

module.exports = Queue;
