'use strict';

const solution = require('../index');

var testIn = {
  head: {
    value: 42,
    next: {
      value: 9000,
      next: {
        value: 13,
        next: {
          value: 5,
          next: {
            value: 16,
            next: {
              value: 12,
              next: null,
            },
          },
        },
      },
    },
  },
};

let testOut = {
  'next': {
    'next': null,
    'value': 12,
  },
  'value': 16,
};

describe('Function Validation', () => {
  it('should verify ... is a function', () => {
    expect(solution).toBeInstanceOf(Function);
  });
});
describe('Function Operation', () => {
  it('should verify that function operates correctly', () => {
    expect(solution).toBeDefined();
  });
});
describe('No Argument', () => {
  it('should return null when/if there isn\'t an argument', () => {
    expect(solution()).toBeNull();
  });
});
describe('Invalid Input', () => {
  it('should throw error if input is invalid', () => {
    expect(() => solution(-11111, testIn)).toThrow();
  });
});
describe('Correct Answer', () => {
  it('should return the correct answer', () => {
    expect(solution(1, testIn)).toEqual(testOut);
  });
});