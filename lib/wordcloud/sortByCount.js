var sort = require('../utils/sort');

function byCount (a, b) {
  return b.count - a.count;
}

module.exports = sort(byCount);
