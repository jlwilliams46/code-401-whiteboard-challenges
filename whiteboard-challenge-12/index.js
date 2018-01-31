'use strict';

const Stack = require('./lib/stack');

module.exports = class {
  constructor() {
    this.enqueue = new Stack();
    this.dequeue = new Stack();
  }

  Enqueue(val) {
    this.enqueue.push(val);
    return this.enqueue;
  }

  Dequeue() {

    if (this.dequeue.top === null) {
      this.dequeue = this.enqueue;
      this.enqueue = new Stack();
    }
    return this.dequeue.pop();
  }
};