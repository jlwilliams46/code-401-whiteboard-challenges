'use strict';

const solution = module.exports = {};
require('jest');

solution.midNode = (li) => {

    if (li === undefined) return null;
    if (li.head === undefined) return null;

    let ct = 1,
        nd = li.head,
        x = 0,
        it;

    for (it = li.head; it.next; it = it.next) {
        ct = Math.ceil(ct / 2);
        ct++;
        console.log(ct);
    }

    do {
        console.log(nd, ct);
        if (x === ct + -1) return nd;
        nd = nd.next;
        x++;
    } while (x < ct);
};