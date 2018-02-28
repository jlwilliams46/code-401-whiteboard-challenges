'use strict';

const nagaram = require('../lib/solution');

let original = ['acre', 'act', 'race', 'cat', 'tac', 'care'],
  anagram = ['acre', 'care', 'race', 'act', 'cat', 'tac'],
  short = ['awesome'];

describe('Is Defined', () => {
  it('should validate that nagaram functions correctly', () => {
    expect(nagaram).toBeDefined();
  });
});

describe('Correct Answer', () => {
  it('should return the correct answer', () => {
    expect(nagaram(original)).toEqual(anagram);
  });
});

describe('Array Validation', () => {
  it('should throw error if array is not long enough', () => {
    expect(nagaram(short.length)).toThrowError;
  });
});

describe('Undefined Array', () => {
  it('should return null if array is undefined', () => {
    expect(nagaram(undefined)).toBeNull();
  });
});

describe('Input Validation', () => {
  it('should throw error if input not an array', () => {
    expect(() => nagaram('jamie')).toThrowError;
  });
});