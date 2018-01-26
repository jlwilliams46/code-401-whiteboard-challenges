const solution = require('../lib/solution.js');
require('jest');

describe('Function Validation', () => {
    it('should verify that solution.traverse is a function', () => {
        expect(solution.traverse).toBeInstanceOf(Function);
    });
});


describe('Correct Output', () => {
    it('should return correct sum of all passengers', () => {
        train = {
            "value": 2,
            "next": {
                "value": 2,
                "next": {
                    "value": 6,
                    "next": {
                        "value": 2,
                        "next": null
                    }
                }
            }
        }

        expect(solution.traverse(train)).toBe(12);
    });
});

describe('Number Validation', () => {
    it('should return null if any input is not a number', () => {
        altTrain = {
            "value": 2,
            "next": {
                "value": 'spongebob',
                "next": {
                    "value": 6,
                    "next": {
                        "value": 'krabby patty',
                        "next": null
                    }
                }
            }
        }
        expect(solution.traverse(altTrain)).toBe(null);
    });
});