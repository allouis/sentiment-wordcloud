var curry = require('./curry');

function set(attr, obj, value) {
  obj[attr] = value; 
  return obj
}

module.exports = curry(set);
