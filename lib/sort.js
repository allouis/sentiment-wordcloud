var curry = require('./curry');

function sort(fn, arr) {
  return Array.prototype.sort.call(arr, fn);
}

module.exports = curry(sort);
