'use strict';

const solution = module.exports = {};

let int = [], j, k;

solution.intersect = function (a, b)  {
    do {
        do {
            a[j] === b[k] ? int.push(a[j]) : undefined;
            k++;
        } while (b.length);
        j++;
    } while (j < a.length);
    
    return int;
    };