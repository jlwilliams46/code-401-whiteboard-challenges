'use strict';

module.exports = (yarar) => {
  try {
    let input = {},
      output = [];

    if (yarar instanceof Array === false) throw new Error();
    if (!yarar) throw new Error();
    if (yarar.length <= 1) throw new Error();

    for (let i in yarar) {
      let modify = yarar[i].split('').sort().join('');
      input[modify] ? input[modify].push(yarar[i]) : input[modify] = [yarar[i]];
    }

    for (var key in input) {
      output = output.concat(input[key].sort());
    }

    return output;

  } catch (e) {
      
    return null;
  }
};