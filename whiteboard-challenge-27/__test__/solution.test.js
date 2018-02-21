'use strict';

const solution = require('../lib/solution');

let testArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  testFloat = [
    [0.97344, 0.09209, 0.92846],
    [0.25985, 0.78799, 0.68529],
    [0.75178, 0.26189, 0.04946],
  ], 
  testUndefined = [];

describe('Correct Result', () => {
  it('should return the correct result', () => {
    expect(solution.rotate(testArray)).toEqual([
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ]);
  });
});

describe('Floating Point Integers', () => {
  it('should return correct result for floating point integers', () => {
    expect(solution.rotate(testFloat)).toEqual([
      [0.97344, 0.25985, 0.75178],
      [0.09209, 0.78799, 0.26189],
      [0.92846, 0.68529, 0.04946],
    ]);
  });
});

describe('Function Operation', () => {
  it('should verify that solution.rotate correctly returns result', () => {
    expect(solution.rotate()).toBeDefined();
  });
});

describe('No Arguments', () => {
  it('should return null if there are no arguments present', () => {
    expect(solution.rotate()).toBeNull();
  });
});

describe('Empty Array', () => {
  it('should throw error of array is empty', () => {
    expect(solution.rotate([])).toThrow;
  });
});

describe('Array Undefined', () => {
  it('should throw error if array is undefined', () => {
    expect(solution.rotate(testUndefined)).toThrow;
  });
});

describe('Array Validation', () => {
  it('should return null for anything other than an array', () => {
    expect(solution.rotate('JAMIE RULES!')).toBeNull();
  });
});

describe('Function Validation', () => {
  it('should verify that solution.rotate is a function', () => {
    expect(solution.rotate).toBeInstanceOf(Function);
  });
});