var array = require('./array');
var bind = require('./bind');

function curry(fn, argl) {
  argl = argl || fn.length;
  return function curried() {
    if (arguments.length >= argl) {
      return fn.apply(null, arguments);
    } else {
      var curried = bind.apply(null, [fn].concat(array(arguments)));
      return curry(curried, argl - arguments.length);
    }
  };
}

module.exports = curry;
