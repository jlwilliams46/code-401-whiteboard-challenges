'use strict';
// Big O Notation: O(n^2)
const solution = module.exports = {};

solution.rotate = (array) => {
  try {
    let result = [];

    if(array instanceof Array !== true || !array) throw new Error();
    
    for (let column = 0; column < array[0].length; column++) {
      result[column] = [];
      for (let row = 0; row < array.length; row++) {
        result[column][row] = array[row][column];
      }
    }
    return result;
  }
  catch(error) {
    return null;
  }
};