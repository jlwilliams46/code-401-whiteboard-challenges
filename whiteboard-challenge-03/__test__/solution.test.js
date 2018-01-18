'use strict';

const solution = require('../lib/solution');
require('jest');

describe('solution', function(){
    it('should begin at the engine and traverse the train, until it reaches the caboose', () => {
    expect(traverse(engine)).toEqual(12);
    })
});
describe('solution', function(){
    it('should validate that value is indeed a number', () => {
    expect(traverse(engine)).$.isNumeric(engine);
    })
});
describe('solution', function(){
    it('should determine when it has reached a value of null', () => {
    expect(traverse(engine)).toBe(null);
    })
});