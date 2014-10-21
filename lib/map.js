var curry = require('./curry');

function map(fn, arr) {
  return Array.prototype.map.call(arr, fn);
}

module.exports = curry(map);
