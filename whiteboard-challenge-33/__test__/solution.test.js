'use strict';

const power = require('../lib/solution');

describe('Correct Output (Positive)', () => {
  it('Should return the correct output', () => {
    expect(power.awesome(2, 15)).toEqual(26);
  });
});

describe('Correct Output (Negative)', () => {
  it('should return the correct output, even if an input is negative ', () => {
    expect(power.awesome(-2, 15)).toEqual(20);
    expect(power.awesome(2, -15)).toEqual(44);
    expect(power.awesome(-2, -15)).toEqual(44);

  });
});

describe('Correct Output (Decimal)', () => {
  it('should throw error if any input is a decimal ', () => {
    expect(() => power.awesome(1.25753, 3)).toThrow();
    expect(() => power.awesome(42, 9.33245)).toThrow();
    expect(() => power.awesome(4.3334, 7.52542)).toThrow();
  });
});

describe('Function Validation', () => {
  it('should show power.awesome is working', () => {
    expect(power.awesome).toBeInstanceOf(Function);
  });
});

describe('Defined', () => {
  it('should show power.awesome is working', () => {
    expect(power.awesome).toBeDefined();
  });
});

describe('Input Validation', () => {
  it('should throw error if input not a number', () => {
    expect(() => power.awesome('jamie', 'rocks')).toThrow();
    expect(() => power.awesome([1, 2, 3, 4], [6, 7, 8, 9])).toThrow();
  });
});

describe('Undefined', () => {
  it('should throw error if input is undefined', () => {
    expect(() => power.awesome(undefined, undefined)).toThrow();
    expect(() => power.awesome(undefined, 15)).toThrow();
    expect(() => power.awesome(2, undefined)).toThrow();
  });
});