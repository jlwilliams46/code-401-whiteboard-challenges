'use strict';

const utils = module.exports = {};

utils.map = (arr, cb) => {
  if(!arr || arr instanceof Array === false) return null;
  if(!cb || cb instanceof Object === false) return null;

  let clone = new Array(...arr), output = [];

  for(let x in clone) {
    output.push(cb(arr[x]));
  }

  return output;
};

utils.filter = (arr, cb) => {
  if(!arr || arr instanceof Array === false) return null;
  if(!cb || cb instanceof Object === false) return null;

  let clone = new Array(...arr), output = [];

  for(let x in clone) {
    if(arr[x] === cb()) output.push(arr[x]);
  }

  return output;
};

utils.reduce = (arr, cb, n) => {
  if(!arr || arr instanceof Array === false) return null;
  if(!cb || cb instanceof Object === false) return null;

  let  clone = new Array(...arr), output = n;

  for(let x in clone) {
    output = cb(output, clone[x]);
  }

  return output;
};