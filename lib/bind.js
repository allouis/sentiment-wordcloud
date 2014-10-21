var rest = require('./rest');

function bind(fn /* arguments */) {
  var args = rest(arguments);
  return function bound() {
    return fn.apply(null, args.concat(array(arguments)));
  };
}

module.exports = bind;
