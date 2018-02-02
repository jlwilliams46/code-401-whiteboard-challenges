'use strict';

const SLL = require('../lib/sll');
const solution = require('../index');
require('jest');

let norm = new SLL;
let duped = new SLL;

norm.insertHead(99);
norm.insertHead(1);
norm.insertHead(42);
norm.insertHead(54);
norm.insertHead(31);
norm.insertHead(84);
norm.insertHead(13);
norm.insertHead(65);

duped.insertHead(22);
duped.insertHead(45);
duped.insertHead(9000);
duped.insertHead(9000);
duped.insertHead(42);
duped.insertHead(30);
duped.insertHead(16);
duped.insertHead(12);

let dupeless = {
  'head': {
    'next': {
      'next': {
        'next': {
          'next': {
            'next': {
              'next': {
                'next': null,
                'val': 22,
              },
              'val': 45,
            },
            'val': 9000,
          },
          'val': 42,
        },
        'val': 30,
      },
      'val': 16,
    },
    'val': 12,
  },
};

describe('Index Tests:', () => {
  describe('Correct Output: No duplicates.', () => {
    it('Should return null if not provided valid SLL objects', () => {
      expect(solution.dedupe(norm)).toEqual(norm);
    });
  });
  describe('Correct Output: Duplicates.', () => {
    it('Should return a SLL norm without consecutive duplicates', () => {
      expect(solution.dedupe(duped)).toEqual(dupeless);
    });
  });
  describe('Code Validation.', () => {
    it('Should verify that the solution was coded properly', () => {
      expect(solution.dedupe).toBeDefined();
    });
  });
});
describe('Argument Validation.', () => {
  it('Should return null if passed invalid argument', () => {
    expect(solution.dedupe('jamie')).toBeNull();
  });
});
describe('Duplicate Verification.', () => {
  it('Should return linked list different(no consecutive duplicates) from the original argument', () => {
    expect(duped).not.toEqual(dupeless);
  });
});
