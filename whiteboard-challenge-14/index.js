'use strict';

const SLL = require('./lib/sll');
const Stack = require('./lib/stack');
const solution = require('./index');

solution.dedupe = (head) => {

  let dupe = new SLL,
    stack = new Stack,
    cur = head.head;

  if (head === undefined) return null;
  if (head.head === null) return null;
  if (head instanceof Object !== true) return null;
  if (head.head.next === null) return null;


  do {
    if (!stack.top) stack.push(cur.val);
    let check = stack.peek();
    if (cur.val === check.val) cur = cur.next;
    if (cur.val !== check.val) stack.push(cur.val);
    cur = cur.next;
  } while (cur);

  do {
    dupe.insertHead(stack.pop().val);
  } while (stack.top);

  return dupe;
};