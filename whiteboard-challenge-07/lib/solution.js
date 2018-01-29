'use strict';

const solution = module.exports = {};

solution.checkLink = (checkLink) => {
  let slow = checkLink, fast = checkLink;

  if (checkLink === undefined) throw new Error('Undefined!');
  if (typeof checkLink !== 'object') throw new Error('Not An Object!');

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) return true;
  }
  return false;
};