var curry = require('./curry');

function get(attr, obj) {
  return obj[attr];
}

module.exports = curry(get);
