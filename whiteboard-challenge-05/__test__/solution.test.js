'use strict';

const solution = require('../lib/solution.js');
require('jest');

describe('Validate Function', () => {
    it('should confirm that midNode is a function', () => {
        expect(solution.midNode).toBeInstanceOf(Function);
    });
});

describe('Validate Next Property', () => {
    it('should check to see if next property is null', () => {
        expect(solution.midNode()).toBe(null);
    });
});

describe('Validate Correct Output', () => {
    it('should return the middle node in a singly linked list', () => {
        expect(solution.midNode(Head)).toEqual(a);
    });
});