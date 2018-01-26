'use strict';

const solution = module.exports = {};
require('jest');

solution.traverse = (engine) => {
    let total = 0,
        passengers = engine;
    if (typeof engine !== 'object') return null;

    while (passengers.next !== null) {
        if (typeof passengers.value !== 'number') return null;
        console.log(passengers.value);
        total += passengers.value;
        passengers = passengers.next;
    }
    console.log(passengers.value);
    let result = total + passengers.value;
    return result;
}