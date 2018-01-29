'use strict';

const solution = module.exports = {};

solution.calculateMissing = (array) => {

  let counter, missing = [], k;

  array.sort((j, w) => {
    return j - w;
  });

  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] - array[i] != 1 && array[i + 1] != undefined) counter = array[i + 1] - array[i] - 1;
    for (k = 1; k <= counter; k++) {
      missing.push(array[i] + k);
    }
  }
  return missing;
};