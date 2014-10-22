var curry = require('./curry');
var each = require('./each');

function pick(keys, obj) {
  var result = {};
  each(function (key) {
    result[key] = obj[key];
  }, keys);  
  return result;
}

module.exports = curry(pick);
