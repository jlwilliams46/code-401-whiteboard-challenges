'use strict';

const solution = module.exports = {};

solution.intersect = (x, y) => {
  try {
    let temp = [];

    if (!x || !y) throw new Error();
    if (x instanceof Array !== true) throw new Error();
    if (y instanceof Array !== true) throw new Error();

    for (let a in x) {
      for (let b in y) {
        x[a] !== y[b] ? undefined: temp.push(x[a]);
      }
    }

    return temp;

  } catch (e) {
      
    return null;
  }
};