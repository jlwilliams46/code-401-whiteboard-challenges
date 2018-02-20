'use strict';

const utils = module.exports = {};

utils.map = (arr, cb) => {
  if(!arr || arr instanceof Array === false) return null;
  if(!cb || cb instanceof Object === false) return null;

  let clone = new Array(...arr), output = [];

  for(let i in clone) {
    output.push(cb(arr[i]));
  }

  return output;
};

utils.filter = (arr, cb) => {
  if(!arr || arr instanceof Array === false) return null;
  if(!cb || cb instanceof Object === false) return null;

  let clone = new Array(...arr), output = [];

  for(let i in clone) {
    if(arr[i] === cb()) output.push(arr[i]);
  }

  return output;
};

utils.reduce = (arr, cb, n) => {
  if(!arr || arr instanceof Array === false) return null;
  if(!cb || cb instanceof Object === false) return null;

  let  clone = new Array(...arr), output = n;

  for(let i in clone) {
    output = cb(output, clone[i]);
  }

  return output;
};
