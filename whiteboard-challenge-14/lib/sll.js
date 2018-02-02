'use strict';


const Nd = require('./node');

class SLL {
  constructor() {
    this.head = null;
  }

  insertHead(val) {
    let nd = new Nd(val);
    nd.next = this.head;
    this.head = nd;
    return this;
  }

  insertEnd(val) {
    let nd = new Nd(val);
    if (!this.head) {
      this.head = nd;
      return this;
    }

    for (var itr = this.head; itr.next; itr = itr.next);
    itr.next = nd;
    return this;
  }

  remove(nd) {
    let cur = this.head,pre;
    if (nd === undefined) return null;
    if (nd instanceof Number !== true) return null;
    if (nd === 1) this.head = this.head.next;
    if (nd === 1) return this;
    for (var itr = 1; itr <= nd; itr++) {
      if (itr === nd) cur.next ? pre.next = cur.next : pre.next = null;
      if (itr === nd) return this;
      pre = cur;
      cur = cur.next;
    }
  }
}

module.exports = SLL;