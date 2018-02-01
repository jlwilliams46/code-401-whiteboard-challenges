'use strict';

const Sll = require('./lib/sll');

Sll.itxn = function (left, right) {
  if (left === undefined) return null;
  if (right === undefined) return null;
  if (typeof left !== 'object') return null;
  if (typeof right !== 'object') return null;

  let t = {},
    x = new Sll(),
    n = left.head;

  do {
    t[n.value] = true;
    n = n.next;
  } while (n);

  while (n) {
    t[n.value] = true;
    n = n.next;
  }
  n = right.head;

  do {
    if (t[n.value]) {
      x.insertEnd(n.value);
    }
    n = n.next;
  } while (n);

  return x;
};