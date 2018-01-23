'use strict';

const solution = module.exports = {};
require('jest');

solution.recur = (ct, cb) => {
  if (ct > 0) return null;
  if (!cb) return null;
  if (!ct) return null;
  if (typeof cb !== 'function') return null;
  if (typeof ct !== 'number') return null;
  do {
    cb();
    ct--;
  } while (ct > 0);
};
