'use strict';

const fibonacci = module.exports = {};

fibonacci.iterative = (x) => {

  let sum = 1, nth = 0;

  if(x < 0) throw new Error();
  if(!x) throw new Error();
  
  if(Number.isInteger(x) === false) throw new Error();

  for(let i = x; x-- > 0;) {
    if([i].length < 0) throw new Error();
    [sum, nth] = [nth + sum, sum];
  }

  return nth;
};

fibonacci.recursive = (x) => {
  if(x < 0) throw new Error();
  if(Number.isInteger(x) === false) throw new Error();

  return (x < 2) ? x : fibonacci.recursive(x - 2) + fibonacci.recursive(x - 1);
};