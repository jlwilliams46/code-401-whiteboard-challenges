'use strict';

const solution = module.exports = {};

solution.intersect = (x, y) => {
    var get, a, x, y, n = [];

    if (x.length > y.length) get = x;
    if (x.length > y.length) a = y;
    if (x.length < y.length) get = y;
    if (x.length < y.length) a = x;

    for (let i = 0; i < a.length; i++) {
        let q = a[i];
        get.indexOf(q) >= 0 ? get[get.indexOf(q)] = null ? get.indexOf(q) : n.push(q) : undefined;
    }
    return n;
};