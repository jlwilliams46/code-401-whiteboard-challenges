'use strict';

const Node = require('./node');

module.exports = class {
  constructor() {
    this.top = null;
  }

  push(val) {
    let node = new Node(val);
    node.next = this.top;
    this.top = node;
    return this.top;
  }

  pop() {
    let alt = this.top;
    this.top = alt.next;
    alt.next = null;
    return alt;
  }

  peek() {
    return this.top;
  }
};