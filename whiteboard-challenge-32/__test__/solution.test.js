'use strict';

const fibonacci = require('../lib/solution');

let test = undefined;

describe('Iterative Tests', () => {
  it('should show fibonacci.iterative is working', () => {
    expect(fibonacci.iterative).toBeDefined();
  });
  it('should show fibonacci.iterative is working', () => {
    expect(fibonacci.iterative).toBeInstanceOf(Function);
  });
  it('should return the correct output', () => {
    expect(fibonacci.iterative(16)).toBe(987);
  });
  it('should throw error if input not a number', () => {
    expect(() => fibonacci.iterative('jamie')).toThrow();
  });
  it('should throw error if input is undefined', () => {
    expect(() => fibonacci.iterative(test)).toThrow();
  });
  it('should throw error if input is negative ', () => {
    expect(() => fibonacci.iterative(-42)).toThrow();
  });
});


describe('Recursive Tests', () => {
  it('should show fibonacci.iterative is working', () => {
    expect(fibonacci.recursive).toBeDefined();
  });
  it('should show fibonacci.iterative is working', () => {
    expect(fibonacci.recursive).toBeInstanceOf(Function);
  });
  it('should return the correct output', () => {
    expect(fibonacci.recursive(16)).toBe(987);
  });
  it('should throw error if input not a number', () => {
    expect(() => fibonacci.recursive('jamie')).toThrow();
  });
  it('should throw error if input is undefined', () => {
    expect(() => fibonacci.recursive(test)).toThrow();
  });
  it('should throw error if input is negative ', () => {
    expect(() => fibonacci.recursive(-42)).toThrow();
  });
});