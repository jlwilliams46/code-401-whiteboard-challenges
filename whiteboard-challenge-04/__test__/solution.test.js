'use strict';

const solution = require('../lib/solution.js');

require ('jest');

describe('array validation', function () {
    it('should validate the arrays', () => {
        return true ? (Array.isArray(["mike", "sue", "tom", "kathy", "henry"]) && Array.isArray(["howey", "jim", "sue", "jennifer", "kathy", "hank", "alex"])) === true : null;
    })
});

describe('unable to find intersection', function () {
    it('should return undefined if unable to find intersection', () => {
        expect(int).toEqual(undefined);
    })
});

describe('the correct result', function () {
    it('should return a result of ["sue", "kathy"]', () => {
        expect(int(a, b)).toEqual(["sue", "kathy"]);
    })
});