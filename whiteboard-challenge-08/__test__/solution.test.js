'use strict';

const solution = require('../index');
const Sll = require('../lib/sll.js');
require('jest');


solution.itxn = {};

let here = new Sll();
here.insertEnd(42);
here.insertEnd(9000);
here.insertEnd(4);
here.insertEnd(52);
here.insertEnd(68);
here.insertEnd(6);
here.insertEnd(92);
here.insertEnd(101);

let there = new Sll();
there.insertEnd(99);
there.insertEnd(4);
there.insertEnd(78);
there.insertEnd(5);
there.insertEnd(9000);
there.insertEnd(36);
there.insertEnd(3);
there.insertEnd(87);


describe('Intersection of Two Linked Lists Tests', () => {
  describe('Object Verification', () => {
    it('should verify that Sll.inxt is a an object', () => {
      expect(typeof Sll.itxn()).toBe('object');
    });
  });
  describe('No Arguments', () => {
    it('returns null if there are no arguments', () => {
      expect(Sll.itxn()).toBe(null);
    });
  });
  describe('Incomplete Arguments', () => {
    it('should return null if an argument is missing', () => {
      expect(Sll.itxn('', here)).toBe(null);
    });
  });
  describe('Correct Output', () => {
    it('should return correct answer', () => {
      expect(Sll.itxn(here, there)).toEqual({
        'head': {
          'next': {
            'next': null,
            'value': 9000,
          },
          'value': 4,
        },
      });
    });
  });
});