'use strict';

const solution = require('../lib/solution.js');
require('jest');

let xt = ['mike', 'sue', 'tom', 'kathy', 'henry'];
let yt = ['howey', 'jim', 'sue', 'jennifer', 'kathy', 'hank', 'alex'];
let ans = ['sue', 'kathy'];

describe('Function Validation', () => {
    it('should verify that solution.intersect is a function', () => {
        expect(solution.intersect).toBeInstanceOf(Function);
    });
});

describe('Result Validation', () => {
    it('should verify the function has produced the correct result', () => {
        expect(solution.intersect(xt, yt)).toEqual(ans);
    });
});

describe('Parameter Validation', () => {
    it('should take two arrays as parameters', () => {
        expect(solution.intersect(xt, yt)).toBeInstanceOf(Array);
    });
});