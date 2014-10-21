var curry = require('./curry');

function each(fn, arr) {
  return Array.prototype.forEach.call(arr, fn);
}

module.exports = curry(each);
