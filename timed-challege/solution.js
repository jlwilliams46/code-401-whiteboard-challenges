'use strict';

function highest(x) {
    let a = x.split(' '),
        b = 0,
        c = '';
    for (let i = 0; i < a.length; i++) {
        let s = a[i],
            d = 0;

        for (let j = 0; j < s.length; j++) {
            d += (s.charCodeAt(j) - 96);
        }

        if (d > b) {
            b = d;
            c = s;
        }
    }
    return c;
}