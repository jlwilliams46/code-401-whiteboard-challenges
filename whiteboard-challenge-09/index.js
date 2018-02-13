'use strict';

module.exports = function (n, l) {
  if (n instanceof Number === true) return null;
  if (l instanceof Object !== true) return null;

  let a = 0, b = l.head;

  try {

    do {
      b = b.next;
      a++;
    } while (b);

    let i = 0, z = a - n, c = l.head;

    do {
      c = c.next;
      i++;
    } while (i < z - 1);

    return c;

  } catch (error) {
    throw new Error();
  }
};