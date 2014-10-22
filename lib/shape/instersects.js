var curry = require('../utils/curry');

function intersects (a, b) {
  return a.left < b.right && a.right > b.left && a.top > b.bottom && a.bottom < b.top;
}

module.exports = curry(intersects);
