'use strict';

const solution = module.exports = {};

solution.checkLink = (checkLink) => {
  let sp = checkLink, fp = checkLink;

  if (checkLink === undefined) throw new Error('Undefined!');
  if (typeof checkLink !== 'object') throw new Error('Not An Object!');

  while (fp !== null && fp.next !== null) {
    sp = sp.next;
    fp = fp.next.next;
    if (fp === sp) return true;
  }
  return false;
};