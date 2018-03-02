'use strict';

const power = module.exports = {};

power.awesome = (base, exponent) => {
  
  let output, sum, regex = /(\d)(?=\d)/g;

  if (base === undefined || exponent === undefined) throw new Error();
  if(Number.isInteger(base) === false  || Number.isInteger(exponent) === false) throw new Error;
  
  output = Math.pow(base, exponent);

  sum = eval(output.toString().replace(regex, '$1+'));
  
  return sum;
};