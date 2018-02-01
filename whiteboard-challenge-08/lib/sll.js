'use strict';

const Nd = require('./nd.js');

class Sll {
  constructor() {
    this.head = null;
  }

  insertEnd(val) {
    if (val === undefined) return null;
    let nd = new Nd(val);
    if (!this.head) {
      this.head = nd;
      return this;
    }
    for (var itr = this.head; itr.next; itr = itr.next);
    itr.next = nd;
    return this;
  }
}

module.exports = Sll;