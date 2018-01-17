    'use strict';

    function maxTwo(Array) {
        return Array.sort((a, b) => b - a).slice(0, 2);
    }