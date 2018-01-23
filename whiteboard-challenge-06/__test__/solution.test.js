'use strict';

const solution = require('../lib/solution.js');
require('jest');

describe('No Input', function () {
  it('should return null if empty', () => {
    expect(solution.recur()).toBeNull();
  });
});
describe('No Negative Numbers', function () {
  it('should return null if number is negative', () => {
    expect(solution.recur(-100000000)).toBeNull();
  });
});
describe('Invalid Input', function () {
  it('should return null if input is not a number', () => {
    expect(solution.recur('awesome sauce', solution.recur)).toBeNull();
  });
});
