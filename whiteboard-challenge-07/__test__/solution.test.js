'use strict';

const str8 = {value: 42, next:{ value: 9000, next: {value: 13, next: null}}};
const cir = {value: 42, next: {value: 9000, next: {value: 13, next: null}}};


const solution = require('../lib/solution.js');

describe('checkLink Tests',() =>  {
  describe('Object Error', () => {
    test('should return error if not an object', () => {
      expect(() => solution.checkLink('')).toThrow('Not An Object!');
    });
  });

  describe('Undefined Error', () => {
    test('should return error if undefined', () => {
      expect(() => !solution.checkLink()).toThrow('Undefined!');
    });
  });

  describe('Correct Answer (Circular Lists)', () => {
    test('should return false if linked list is not circular', () => {
      expect(solution.checkLink(str8)).toEqual(false);
    });
  });

  describe('Correct Answer (Straight Lists)', () => {
    it('should return true if linked list is not circular', () => {
      cir.next.next = cir.next;
      expect(solution.checkLink(cir)).toBe(true);
    });
  });
});