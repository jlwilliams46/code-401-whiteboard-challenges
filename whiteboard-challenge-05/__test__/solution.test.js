'use strict';

const solution = require('../lib/solution.js');
require('jest');

let testy = {
    head: {
        value: 'jamie',
        next: {
            value: 'is',
            next: {
                value: 'seriously',
                next: {
                    value: 'awesome!',
                    next: null
                }
            }
        }
    }
};

describe('Validate Function', () => {
    it('should confirm that midNode is a function', () => {
        expect(solution.midNode).toBeInstanceOf(Function);
    });
});

describe('Validate Correct Output', () => {
    it('should return the middle node in a singly linked list', () => {
        expect(solution.midNode(testy)).toEqual({
            "next": {
                "next": {
                    "next": null,
                    "value": "awesome!"
                },
                "value": "seriously"
            },
            "value": "is"
        });
    });
});

describe('Validate Next Property', () => {
    it('should check to see if next property is null', () => {
        expect(solution.midNode()).toBe(null);
    });
});