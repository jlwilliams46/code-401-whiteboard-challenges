'use strict';

const solution = module.exports = {};
require('jest');
let a, b;


solution.midNode = (head) => {
    for (a = b = head; b.next && b.next.next; a = a.next, b = b.next.next);

    return a;
}
console.log(`output: ${a}`);