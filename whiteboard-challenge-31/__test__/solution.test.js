'use strict';

const solution = require('../lib/solution');

let x = [1, 2, 3, 4], y = [2, 5], correct = [2];

describe('Correct answer', () => {
  it('should return the correct intersection of two arrays', () => {
    expect(solution.intersect(x, y)).toEqual(correct);
  });
});

describe('Be Defined', () => {
  it('should verify that solution.intersect is functioning correctly', () => {
    expect(solution.intersect).toBeDefined();
  });
});

describe('Input Validation', () => {
  it('should throw error if input is invalid and/or not an array', () => {
    expect(solution.intersect('jamie')).toThrowError;
    expect(solution.intersect(42)).toThrowError;
  });
});

describe('Empty Array', () => {
  it('should return null if array is empty', () => {
    expect(solution.intersect()).toBeNull();
  });
});

describe('Undefined Array', () => {
  it('should return null if array is empty', () => {
    expect(solution.intersect(!x)).toBeNull();
    expect(solution.intersect(!y)).toBeNull();
    expect(solution.intersect(undefined)).toBeNull();
  });
});